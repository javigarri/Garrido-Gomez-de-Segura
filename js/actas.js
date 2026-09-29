const actasData = {
    "Nacimiento": [
        { id: 1, title: "Partida de nacimiento de Angelita (Hoja 1)", img: "Angelita 1.jpg", pdf: "Angelita 1.pdf" },
        { id: 2, title: "Partida de nacimiento de Angelita (Hoja 2)", img: "Angelita 2.jpg", pdf: "Angelita 2.pdf" },
        { id: 3, title: "Partida de nacimiento de Aquilino (Hoja 1)", img: "Aquilino 1.jpg", pdf: "Aquilino 1.pdf" },
        { id: 4, title: "Partida de nacimiento de Aquilino (Hoja 2)", img: "Aquilino 2.jpg", pdf: "Aquilino 2.pdf" }
    ],
    "Bautismo": [
        { id: 5, title: "Fe de Bautismo de Alexandro de Garrido", img: "Alexandro de Garrido.jpg", pdf: "Alexandro de Garrido.pdf" },
        { id: 6, title: "Fe de Bautismo de Ana María de Garrido", img: "Ana María de Garrido.jpg", pdf: "Ana María de Garrido.pdf" },
        { id: 7, title: "Fe de Bautismo de Domingo Argote", img: "Domingo Argote.jpg", pdf: "Domingo Argote.pdf" },
        { id: 8, title: "Fe de Bautismo de Francisco de Paula de Garrido", img: "Francisco de Paula de Garrido.jpg", pdf: "Francisco de Paula de Garrido.pdf" },
        { id: 9, title: "Fe de Bautismo de Segunda Angote y Estavillo", img: "Segunda Angote y Estavillo.jpg", pdf: "Segunda Angote y Estavillo.pdf" }
    ],
    "Matrimonio": [
        { id: 12, title: "Acta Matrimonial 1", img: "1785526452122.jpg", pdf: "1785526452122.pdf" },
        { id: 13, title: "Acta Matrimonial 2", img: "1785526452165.jpg", pdf: "1785526452165.pdf" }
    ],
    "Defuncion": [
        // Actualmente sin archivos, listo para el futuro
    ]
};

// Función para abrir el modal y renderizar la galería
function openActasFolder(category) {
    const modal = document.getElementById('actas-modal');
    const modalTitle = document.getElementById('actas-modal-title');
    const gallery = document.getElementById('actas-gallery');

    modalTitle.textContent = `Documentos de ${category}`;
    gallery.innerHTML = '';

    const items = actasData[category] || [];

    if (items.length === 0) {
        gallery.innerHTML = '<p class="empty-state">No hay documentos en esta carpeta todavía.</p>';
    } else {
        let html = '';
        
        // Bloque de Imágenes (JPG)
        html += '<div class="actas-section"><h3>Imágenes</h3><div class="actas-gallery-grid">';
        items.forEach(item => {
            if (item.img) {
                const imgUrl = `assets/actas/${category}/${item.img}`;
                html += `
                    <div class="acta-item">
                        <a href="${imgUrl}" target="_blank" title="Ver imagen a tamaño completo">
                            <img src="${imgUrl}" alt="${item.title}" class="acta-thumbnail" onerror="this.style.opacity='0.5'">
                            <div class="acta-overlay">
                                <span class="view-pdf-icon">🖼️</span>
                                <span>Ver Imagen</span>
                            </div>
                        </a>
                        <h4 class="acta-title">${item.title}</h4>
                    </div>
                `;
            }
        });
        html += '</div></div>';

        // Bloque de PDFs
        html += '<div class="actas-section" style="margin-top: 3rem; border-top: 1px solid #eee; padding-top: 2rem;"><h3>Documentos PDF</h3><div class="actas-gallery-grid">';
        items.forEach(item => {
            if (item.pdf) {
                const pdfUrl = `assets/actas/${category}/${item.pdf}`;
                html += `
                    <div class="acta-item">
                        <a href="${pdfUrl}" target="_blank" title="Ver documento PDF">
                            <div class="pdf-placeholder">
                                <span class="view-pdf-icon" style="font-size: 3rem; margin-bottom: 1rem; color: #e74c3c;">📄</span>
                                <span>Abrir PDF</span>
                            </div>
                            <div class="acta-overlay">
                                <span class="view-pdf-icon">📄</span>
                                <span>Ver PDF</span>
                            </div>
                        </a>
                        <h4 class="acta-title">${item.title}</h4>
                    </div>
                `;
            }
        });
        html += '</div></div>';

        gallery.innerHTML = html;
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Evitar scroll del fondo
}

// Función para cerrar el modal
function closeActasModal() {
    const modal = document.getElementById('actas-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Cerrar modal al pulsar fuera del contenido
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('actas-modal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeActasModal();
            }
        });
    }
});
