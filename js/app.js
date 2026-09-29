document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Navegación y Menú Hamburguesa ---
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.getElementById('navbar');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Cerrar menú al hacer click en un enlace
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '0.5rem var(--spacing-md)';
            navbar.style.backgroundColor = 'rgba(253, 252, 251, 0.98)';
        } else {
            navbar.style.padding = '1rem var(--spacing-md)';
            navbar.style.backgroundColor = 'rgba(253, 252, 251, 0.95)';
        }
    });


    // --- 2. Renderizar Árbol Genealógico ---
    const generationsContainer = document.getElementById('tree-generations');
    const svgOverlay = document.getElementById('tree-svg-overlay');
    
    if (familyData && familyData.generations) {
        let html = '';
        familyData.generations.forEach(gen => {
            let leftBranchHtml = '';
            let rightBranchHtml = '';
            let centerHtml = '';
            
            function renderGroup(group) {
                let spacerAttr = group.spacer ? ' style="visibility: hidden; opacity: 0; pointer-events: none;"' : '';
                let groupHtml = `<div class="family-group" id="${group.id}"${spacerAttr}>`;
                
                if (group.couple) {
                    groupHtml += `<div class="couple-container">`;
                    group.couple.forEach(person => {
                        const parentAttr = person.parentId ? ` data-parent="${person.parentId}"` : '';
                        groupHtml += `<div class="person-node" id="node-${person.id}"${parentAttr}>
                            <span class="tree-node-name">${person.name}</span>
                            <span class="tree-node-dates">${person.dates}</span>
                        </div>`;
                    });
                    groupHtml += `</div>`; // couple-container
                }
                
                if (group.childrenGroups) {
                    groupHtml += `<div class="children-container" style="display: flex; gap: 3rem; justify-content: center; margin-top: 4rem;">`;
                    group.childrenGroups.forEach(childGroup => {
                        groupHtml += renderGroup(childGroup);
                    });
                    groupHtml += `</div>`; // children-container
                } else if (group.children) {
                    groupHtml += `<div class="children-container">`;
                    group.children.forEach(child => {
                        const highlightClass = child.highlight ? 'highlight-node' : '';
                        groupHtml += `<div class="person-node child-node ${highlightClass}" id="node-${child.id}">
                            <span class="tree-node-name">${child.name}</span>
                            <span class="tree-node-dates">${child.dates}</span>
                        </div>`;
                    });
                    groupHtml += `</div>`; // children-container
                }
                
                groupHtml += `</div>`; // family-group
                return groupHtml;
            }

            gen.groups.forEach(group => {
                let groupHtml = renderGroup(group);
                
                if (group.branch === 'left') {
                    leftBranchHtml += groupHtml;
                } else if (group.branch === 'right') {
                    rightBranchHtml += groupHtml;
                } else {
                    centerHtml += groupHtml;
                }
            });
            
            html += `<div class="generation-row" id="${gen.id}">`;
            if (leftBranchHtml || rightBranchHtml) {
                html += `<div class="branch left-branch">${leftBranchHtml}</div>`;
                html += `<div class="branch right-branch">${rightBranchHtml}</div>`;
            } else {
                html += `<div class="branch center-branch" style="display: flex; gap: 3rem; justify-content: center;">${centerHtml}</div>`;
            }
            html += `</div>`; // generation-row
        });
        
        if (generationsContainer) {
            generationsContainer.innerHTML = html;
        }

        function drawTreeLines() {
            const treeContainerElement = document.getElementById('tree-container');
            if (!svgOverlay || !generationsContainer || !treeContainerElement) return;
            
            // Función auxiliar para obtener posición independiente del CSS transform (zoom)
            function getRelativePos(element, container) {
                let top = 0, left = 0;
                let current = element;
                while (current && current !== container && current !== document.body) {
                    top += current.offsetTop;
                    left += current.offsetLeft;
                    current = current.offsetParent;
                }
                return {
                    top: top,
                    left: left,
                    width: element.offsetWidth,
                    height: element.offsetHeight,
                    right: left + element.offsetWidth,
                    bottom: top + element.offsetHeight
                };
            }
            
            svgOverlay.setAttribute('width', treeContainerElement.scrollWidth);
            svgOverlay.setAttribute('height', treeContainerElement.scrollHeight);
            
            let svgHTML = '';
            
            const coupleMidpoints = {};
            
            const couples = document.querySelectorAll('.couple-container');
            couples.forEach(couple => {
                const persons = couple.querySelectorAll('.person-node');
                if (persons.length >= 2) {
                    for (let i = 0; i < persons.length - 1; i++) {
                        const rect1 = getRelativePos(persons[i], treeContainerElement);
                        const rect2 = getRelativePos(persons[i+1], treeContainerElement);
                        
                        const x1 = rect1.right;
                        const y1 = rect1.top + (rect1.height / 2);
                        const x2 = rect2.left;
                        const y2 = rect2.top + (rect2.height / 2);
                        
                        svgHTML += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="tree-line" />`;
                    }
                }
            });
            
            const childrenContainers = document.querySelectorAll('.children-container');
            
            // Pre-procesamiento: centrar hijos bajo los dos primeros cónyuges en familias de 3 o más
            childrenContainers.forEach(container => {
                const parentGroup = container.closest('.family-group');
                if (!parentGroup) return;
                const coupleContainer = parentGroup.querySelector(':scope > .couple-container');
                if (!coupleContainer) return;
                const parentSpouses = coupleContainer.querySelectorAll('.person-node');
                
                if (parentSpouses.length > 2) {
                    const rect1 = getRelativePos(parentSpouses[0], treeContainerElement);
                    const rect2 = getRelativePos(parentSpouses[1], treeContainerElement);
                    const targetX = rect1.left + rect1.width + (rect2.left - (rect1.left + rect1.width)) / 2;
                    
                    container.style.marginLeft = '0px'; // Reset for measurement
                    container.style.marginRight = '0px';
                    const containerRect = getRelativePos(container, treeContainerElement);
                    const currentX = containerRect.left + (containerRect.width / 2);
                    
                    const shift = targetX - currentX;
                    
                    // En un contenedor flex (align-items: center), un margin empuja el elemento
                    // solo la mitad de la distancia deseada debido al re-centrado automático del espacio restante.
                    // Para moverlo X píxeles reales en la pantalla, el margin debe ser de 2X.
                    if (shift > 0) {
                        container.style.marginLeft = `${shift * 2}px`;
                    } else if (shift < 0) {
                        container.style.marginRight = `${-shift * 2}px`;
                    }
                }
            });

            childrenContainers.forEach(container => {
                const parentGroup = container.closest('.family-group');
                if (!parentGroup) return;

                const coupleContainer = parentGroup.querySelector(':scope > .couple-container');
                if (!coupleContainer) return;

                const parentSpouses = coupleContainer.querySelectorAll('.person-node');
                if (parentSpouses.length === 0) return;

                let startX, startY;
                if (parentSpouses.length >= 2) {
                    const rect1 = getRelativePos(parentSpouses[0], treeContainerElement);
                    const rect2 = getRelativePos(parentSpouses[1], treeContainerElement);
                    startX = rect1.left + rect1.width + (rect2.left - (rect1.left + rect1.width)) / 2;
                } else {
                    const rect = getRelativePos(parentSpouses[0], treeContainerElement);
                    startX = rect.left + (rect.width / 2);
                }
                const coupleRect = getRelativePos(coupleContainer, treeContainerElement);
                startY = coupleRect.bottom;
                const parentBottom = startY;

                // Encontrar a los hijos. Pueden ser nodos directos (.child-node) o grupos enteros (.family-group > .couple-container > .person-node)
                const childElements = Array.from(container.children);
                
                childElements.forEach(child => {
                    let targetNode = child;
                    if (child.classList.contains('family-group')) {
                        const childCouple = child.querySelector(':scope > .couple-container');
                        if (childCouple) {
                            const childPersons = childCouple.querySelectorAll('.person-node');
                            if (childPersons.length >= 2) {
                                // Apuntar al hueco entre los esposos hijos
                                const rect1 = getRelativePos(childPersons[0], treeContainerElement);
                                const rect2 = getRelativePos(childPersons[1], treeContainerElement);
                                const endX = rect1.left + rect1.width + (rect2.left - (rect1.left + rect1.width)) / 2;
                                const endY = Math.min(rect1.top, rect2.top);
                                const offset = (startX % 30) - 15;
                                const midY = parentBottom + (endY - parentBottom) / 2 + offset;
                                svgHTML += `<path d="M ${startX} ${startY} V ${midY} H ${endX} V ${endY}" class="tree-line" />`;
                                return;
                            } else {
                                targetNode = childPersons[0];
                            }
                        }
                    }

                    if (targetNode) {
                        const childRect = getRelativePos(targetNode, treeContainerElement);
                        const endX = childRect.left + (childRect.width / 2);
                        const endY = childRect.top;
                        
                        const offset = (startX % 30) - 15;
                        const midY = parentBottom + (endY - parentBottom) / 2 + offset;
                        
                        svgHTML += `<path d="M ${startX} ${startY} V ${midY} H ${endX} V ${endY}" class="tree-line" />`;
                    }
                });
            });
            
            // Trazar líneas para nodos individuales que están en parejass (ej. padres de uno de los conyuges)
            const linkedPersons = document.querySelectorAll('.person-node[data-parent]');
            linkedPersons.forEach(child => {
                if (child.closest('.children-container')) return; // Ya procesados
                
                const parentId = child.getAttribute('data-parent');
                const parent = document.getElementById(parentId);
                if (parent) {
                    const parentRect = getRelativePos(parent, treeContainerElement);
                    const childRect = getRelativePos(child, treeContainerElement);
                    
                    let startX;
                    let startY;
                    const spouses = parent.querySelectorAll('.person-node');
                    if (spouses.length >= 2) {
                        const rect1 = getRelativePos(spouses[0], treeContainerElement);
                        const rect2 = getRelativePos(spouses[1], treeContainerElement);
                        // Centro exacto del hueco entre los dos cónyuges
                        startX = rect1.left + rect1.width + (rect2.left - (rect1.left + rect1.width)) / 2;
                        // Y exacto del borde inferior más bajo de ambos cónyuges
                        startY = Math.max(rect1.top + rect1.height, rect2.top + rect2.height);
                    } else {
                        const rect = getRelativePos(spouses[0] || parent, treeContainerElement);
                        startX = rect.left + (rect.width / 2);
                        startY = rect.top + rect.height;
                    }
                    
                    const endX = childRect.left + (childRect.width / 2);
                    const endY = childRect.top;
                    const offset = (startX % 30) - 15; // Offset para evitar superposición
                    const midY = startY + (endY - startY) / 2 + offset;
                    svgHTML += `<path d="M ${startX} ${startY} V ${midY} H ${endX} V ${endY}" class="tree-line" />`;
                }
            });
            
            svgOverlay.innerHTML = svgHTML;
        }

        setTimeout(drawTreeLines, 100);
        window.addEventListener('resize', drawTreeLines);

        // --- Inicializar Panzoom ---
        const treeContainer = document.getElementById('tree-container');
        const zoomInBtn = document.getElementById('zoom-in');
        const zoomOutBtn = document.getElementById('zoom-out');
        const zoomResetBtn = document.getElementById('zoom-reset');
        
        if (typeof Panzoom !== 'undefined' && treeContainer) {
            const panzoom = Panzoom(treeContainer, {
                maxScale: 2,
                minScale: 0.1,
                startScale: 0.8
            });

            // Permitir zoom con la rueda del ratón
            treeContainer.parentElement.addEventListener('wheel', panzoom.zoomWithWheel);
            
            // Botones de control
            if (zoomInBtn) zoomInBtn.addEventListener('click', panzoom.zoomIn);
            if (zoomOutBtn) zoomOutBtn.addEventListener('click', panzoom.zoomOut);
            if (zoomResetBtn) zoomResetBtn.addEventListener('click', () => {
                panzoom.reset();
                centerOnAquilino();
            });
            
            // Redibujar las líneas cuando termine de hacer pan/zoom si fuera necesario
            treeContainer.addEventListener('panzoomchange', () => {
                // Las líneas son hijas del container, por lo que escalan junto con él automáticamente
                // No es necesario redibujar aquí
            });

            // Función para centrar en Aquilino y Angela
            function centerOnAquilino() {
                const targetNode = document.getElementById('group-parents');
                const viewport = treeContainer.parentElement;
                if (targetNode && viewport) {
                    const targetBox = targetNode.getBoundingClientRect();
                    const viewBox = viewport.getBoundingClientRect();
                    
                    const dx = (viewBox.left + viewBox.width / 2) - (targetBox.left + targetBox.width / 2);
                    // Dejarlo un poco más arriba del centro vertical para que se vea la descendencia
                    const dy = (viewBox.top + viewBox.height / 3) - (targetBox.top + targetBox.height / 2);
                    
                    const currentPan = panzoom.getPan();
                    const scale = panzoom.getScale();
                    
                    panzoom.pan(currentPan.x + (dx / scale), currentPan.y + (dy / scale), { animate: true });
                }
            }

            // Centrar automáticamente tras un breve delay para asegurar que SVG y posiciones estén listos
            setTimeout(centerOnAquilino, 200);
        }
    }


    // --- 3. Renderizar Biografías ---
    const bioContainer = document.getElementById('bio-container');
    
    if (familyData && familyData.biographies) {
        let bioHTML = '';
        familyData.biographies.forEach(bio => {
            bioHTML += `
                <div class="bio-card">
                    <div class="bio-img-wrapper">
                        <img src="${bio.img}" alt="Retrato de ${bio.name}" loading="lazy">
                    </div>
                    <h3>${bio.name}</h3>
                    <span class="bio-dates">${bio.dates}</span>
                    <p class="bio-desc">${bio.description}</p>
                </div>
            `;
        });
        bioContainer.innerHTML = bioHTML;
    }


    // --- 3.5 Renderizar Sección de ADN ---
    const adnContainer = document.getElementById('adn-container');
    
    if (familyData && familyData.adn && adnContainer) {
        let adnHTML = '';
        familyData.adn.forEach(item => {
            adnHTML += `
                <div class="adn-card" data-src="${item.src}" data-caption="${item.caption}">
                    <div class="adn-img-wrapper">
                        <img src="${item.src}" alt="${item.title}" loading="lazy">
                        <div class="adn-overlay">
                            <span>🔍 Ver imagen completa</span>
                        </div>
                    </div>
                    <div class="adn-info">
                        ${item.badge ? `<span class="adn-badge">${item.badge}</span>` : ''}
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                    </div>
                </div>
            `;
        });
        adnContainer.innerHTML = adnHTML;
    }


    // --- 4. Renderizar Galería ---
    const galleryContainer = document.getElementById('gallery-container');
    
    if (familyData && familyData.gallery) {
        let galleryHTML = '';
        familyData.gallery.forEach(item => {
            galleryHTML += `
                <div class="gallery-item" data-src="${item.src}" data-caption="${item.caption}">
                    <img src="${item.src}" alt="${item.caption}" loading="lazy">
                    <div class="gallery-overlay">
                        <span>Ver foto</span>
                    </div>
                </div>
            `;
        });
        galleryContainer.innerHTML = galleryHTML;
    }


    // --- 5. Lightbox para Galería y ADN ---
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const captionText = document.getElementById('caption');
    const closeLightboxBtn = document.querySelector('.close-lightbox');
    
    function openLightbox(src, caption) {
        if (!lightbox || !lightboxImg) return;
        lightbox.style.display = 'block';
        lightboxImg.src = src;
        if (captionText) captionText.innerHTML = caption || '';
        document.body.style.overflow = 'hidden'; // Prevenir scroll
    }

    // Abrir lightbox al hacer clic en elementos de galería o tarjetas de ADN
    document.querySelectorAll('.gallery-item, .adn-card').forEach(item => {
        item.addEventListener('click', function() {
            openLightbox(this.getAttribute('data-src'), this.getAttribute('data-caption'));
        });
    });

    // Cerrar lightbox
    if (closeLightboxBtn) closeLightboxBtn.addEventListener('click', closeLightbox);
    
    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target !== lightboxImg) {
                closeLightbox();
            }
        });
    }

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox && lightbox.style.display === 'block') {
            closeLightbox();
        }
    });

    function closeLightbox() {
        if (!lightbox) return;
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restaurar scroll
    }


    // --- 6. Animaciones al hacer Scroll (Intersection Observer) ---
    const fadeElements = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    fadeElements.forEach(el => {
        appearOnScroll.observe(el);
    });


    // --- 7. Formulario de Contacto (Prevent Default) ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('¡Gracias! El mensaje ha sido enviado correctamente.');
            contactForm.reset();
        });
    }
});
