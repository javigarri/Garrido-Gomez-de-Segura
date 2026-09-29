// Datos mockeados para el árbol genealógico, biografías y galería

// Función auxiliar para crear bloques invisibles (spacers) y mantener la cuadrícula
const S = (id) => ({ id: "spacer-" + id, branch: "left", spacer: true, couple: [{ id: "s-" + id + "a", name: "Nombre Largo Para Ocupar Espacio", dates: "Spacer" }, { id: "s-" + id + "b", name: "Nombre Largo Para Ocupar Espacio", dates: "Spacer" }] });
const R = (id) => ({ id: "spacer-" + id, branch: "right", spacer: true, couple: [{ id: "s-" + id + "a", name: "Nombre Largo Para Ocupar Espacio", dates: "Spacer" }, { id: "s-" + id + "b", name: "Nombre Largo Para Ocupar Espacio", dates: "Spacer" }] });
const C = (id) => ({ id: "spacer-" + id, spacer: true, couple: [{ id: "s-" + id + "a", name: "Nombre Largo Para Ocupar Espacio", dates: "Spacer" }, { id: "s-" + id + "b", name: "Nombre Largo Para Ocupar Espacio", dates: "Spacer" }] });

const familyData = {
    // Árbol estructurado en formato jerárquico
    generations: [
        {
            id: "gen-great-great-great-great-grandparents",
            groups: [
                S('g7-1'), S('g7-2'), S('g7-3'), S('g7-4'),
                {
                    id: "group-juan-saenz",
                    branch: "left",
                    couple: [
                        { id: "juan-saenz", name: "Juan Saenz de Ugarte Aranegui", dates: "13/03/1735 - 17/07/1800" },
                        { id: "ana-maria", name: "Ana Maria Urrutia Martinez de Arenaza", dates: "12/02/1748 - 22/01/1796" }
                    ]
                },
                {
                    id: "group-esteban",
                    branch: "left",
                    couple: [
                        { id: "esteban", name: "Esteban Marin Perez de Arenaza Lopez", dates: "22/07/1765 - 23/11/1846" },
                        { id: "manuela-ynfante", name: "Manuela Ynfante Lorza", dates: "28/10/1765 - Fallecida" }
                    ]
                },
                {
                    id: "group-joseph-gabriel",
                    branch: "left",
                    couple: [
                        { id: "joseph-gabriel", name: "Joseph Gabriel Diaz de Antoñana Alzola", dates: "17/03/1766 - 06/09/1807" },
                        { id: "maria-hortiz", name: "Maria Hortiz de Insagurbe Fernandez de Goveo", dates: "03/02/1762 - 11/12/1829" }
                    ]
                },
                {
                    id: "group-juachin",
                    branch: "left",
                    couple: [
                        { id: "juachin", name: "Juachin Matheo Perez de Mendiola Quintana", dates: "21/09/1762 - 11/03/1821" },
                        { id: "maria-formeria", name: "Maria Formeria Fernandez de Viana Saenz de Ugarte", dates: "25/09/1774 - 23/09/1825" }
                    ]
                },
                {
                    id: "group-bernardo",
                    branch: "left",
                    couple: [
                        { id: "bernardo", name: "Bernardo Saenz de Ugarte y Gaviria Lopez de Zuazo", dates: "23/08/1744 - 28/01/1821" },
                        { id: "maria-antonia", name: "Maria Antonia Diaz de Antoñana Suso", dates: "13/06/1751 - 07/01/1816" }
                    ]
                },
                {
                    id: "group-joachin",
                    branch: "left",
                    couple: [
                        { id: "joachin", name: "Joachin (Joaquín Santos) Sagastui Ruiz de Gaona", dates: "28/03/1761 - 07/06/1805" },
                        { id: "maria-polonia", name: "Maria Polonia Diaz de Antoñana Perez de Arenaza", dates: "12/02/1769 - 03/01/1829" }
                    ]
                },
                {
                    id: "group-santiago",
                    branch: "left",
                    couple: [
                        { id: "santiago", name: "Santiago Ruiz de Alda Saenz de Buruaga", dates: "28/07/1765 - 27/03/1817" },
                        { id: "fausta-magdalena", name: "Fausta Magdalena Lopez de la Calle Alzola", dates: "14/02/1764 - 09/03/1808" }
                    ]
                },
                {
                    id: "group-miguel-ochoa",
                    branch: "left",
                    couple: [
                        { id: "miguel-ochoa", name: "Miguel (Migel) Ochoa de Alda Ruiz de Alda", dates: "29/09/1752 - 07/04/1821" },
                        { id: "engracia-lucia", name: "Engracia Lucia Ruiz de Alda Gaviria de Olazabal", dates: "19/04/1757 - 20/03/1835" }
                    ]
                }
            ]
        },
        {
            id: "gen-great-great-great-grandparents",
            groups: [
                S('g6-1'),
                {
                    id: "group-gregorio",
                    branch: "left",
                    couple: [
                        { id: "gregorio", name: "Gregorio Garrido", dates: "Desconocida - Fallecido" },
                        { id: "bernarda", name: "Bernarda Berriocal", dates: "Desconocida - Fallecida" }
                    ]
                },
                S('g6-3'),
                {
                    id: "group-miguel",
                    branch: "left",
                    couple: [
                        { id: "miguel", name: "Miguel Sainz", dates: "Desconocida - Fallecido" },
                        { id: "alfonsa", name: "Alfonsa Ruiz", dates: "Desconocida - Fallecida" }
                    ]
                },
                S('g6-5'),
                {
                    id: "group-francisco-saenz",
                    branch: "left",
                    couple: [
                        { id: "francisco-saenz", name: "Francisco Saenz de Ugarte Urrutia", dates: "04/10/1784 - 11/06/1825", parentId: "group-juan-saenz" },
                        { id: "juana", name: "Juana Perez de Arenaza Ruiz de Ynfante", dates: "21/08/1793 - 19/01/1868", parentId: "group-esteban" }
                    ]
                },
                S('g6-7'),
                {
                    id: "group-juan-fernando",
                    branch: "left",
                    couple: [
                        { id: "juan-fernando", name: "Juan Fernando Diaz de Antoñana Insagurbe", dates: "04/06/1802 - 02/04/1835", parentId: "group-joseph-gabriel" },
                        { id: "maria-magdalena", name: "Maria Magdalena Perez de Mendiola Fernandez de Viana", dates: "23/07/1798 - 14/07/1834", parentId: "group-juachin" }
                    ]
                },
                S('g6-9'),
                {
                    id: "group-fructo",
                    branch: "left",
                    couple: [
                        { id: "fructo", name: "Fructo Saenz de Ugarte Y Gabiria Diaz De Antoñana", dates: "27/10/1792 - 29/12/1837", parentId: "group-bernardo" },
                        { id: "manuela", name: "Manuela Antonia Sagastui Diaz De Antoñana", dates: "15/03/1792 - 08/06/1850", parentId: "group-joachin" }
                    ]
                },
                S('g6-11'),
                {
                    id: "group-fabian",
                    branch: "left",
                    couple: [
                        { id: "fabian", name: "Fabian Ruiz de Alda lopez de la Calle", dates: "22/01/1795 - 09/11/1861", parentId: "group-santiago" },
                        { id: "antonia", name: "Antonia Ochoa De Alda Ruiz De Alda", dates: "14/06/1790 - Fallecida", parentId: "group-miguel-ochoa" }
                    ]
                }
            ]
        },
        {
            id: "gen-great-great-grandparents",
            groups: [
                S('g5-1'), S('g5-2'),
                {
                    id: "group-justo",
                    branch: "left",
                    couple: [
                        { id: "justo", name: "Justo Garrido Barrio", dates: "Desconocida - Fallecido", parentId: "group-gregorio" },
                        { id: "nisala", name: "Nicolasa Sainz", dates: "Desconocida - Fallecida", parentId: "group-miguel" }
                    ]
                },
                S('g5-4'), S('g5-5'), S('g5-6'),
                {
                    id: "group-manuel",
                    branch: "left",
                    couple: [
                        { id: "manuel", name: "Manuel Saenz de Ugarte Perez de Arenaza", dates: "19/10/1816 - 22/02/1865", parentId: "group-francisco-saenz" },
                        { id: "francisca", name: "Francisca Antoñana Perez de Mendiola", dates: "13/04/1822 - 06/02/1890", parentId: "group-juan-fernando" }
                    ]
                },
                S('g5-8'), S('g5-9'), S('g5-10'),
                {
                    id: "group-xisto",
                    branch: "left",
                    couple: [
                        { id: "xisto", name: "Xisto Saenz de Ugarte Sagastui", dates: "07/08/1822 - 08/04/1900", parentId: "group-fructo" },
                        { id: "benita", name: "Benita Ruiz de Alda Ochoa de Alda", dates: "21/03/1821 - 03/09/1855", parentId: "group-fabian" }
                    ]
                },
                S('g5-12'),
                R('g5-1'), R('g5-2'),
                {
                    id: "group-alejandro",
                    branch: "right",
                    couple: [
                        { id: "alejandro", name: "Alejandro Gomez de Segura Suso", dates: "28/02/1803 - 05/02/1872" },
                        { id: "francisca-ocariz", name: "Francisca Ocariz Suso", dates: "Desconocida - Fallecida" }
                    ]
                },
                R('g5-4'),
                {
                    id: "group-juan-francisco",
                    branch: "right",
                    couple: [
                        { id: "juan-francisco", name: "Juan Francisco Oyarzabal Apaolaza", dates: "Desconocida - 11/05/1897" },
                        { id: "monica", name: "Monica Alava Garcia de Motiloa", dates: "12/11/1895 - Fallecida" }
                    ]
                },
                R('g5-6'),
                {
                    id: "group-manuel-argote",
                    branch: "right",
                    couple: [
                        { id: "manuel-argote", name: "Manuel Argote", dates: "Desconocida - Fallecido" },
                        { id: "francisca-lopez", name: "Francisca Lopez de Anviso", dates: "Desconocida - Fallecida" }
                    ]
                },
                R('g5-8'), R('g5-9'), R('g5-10'),
                {
                    id: "group-jose-estavillo",
                    branch: "right",
                    couple: [
                        { id: "jose-estavillo", name: "Jose Estavillo", dates: "Desconocida - Fallecido" },
                        { id: "cayetana", name: "Cayetana Susaeta", dates: "Desconocida - Fallecida" }
                    ]
                },
                R('g5-12')
            ]
        },
        {
            id: "gen-great-grandparents",
            groups: [
                S('g4-1'), S('g4-2'),
                {
                    id: "group-francisco",
                    branch: "left",
                    couple: [
                        { id: "francisco", name: "Francisco Garrido Saenz", dates: "02/04/1830 - 16/08/1895", parentId: "group-justo" },
                        { id: "maria-carmen", name: "Maria Carmen Orobio de Echazarra Urrutia/Verulia", dates: "Desconocida - Fallecida" }
                    ]
                },
                S('g4-4'), S('g4-5'), S('g4-6'), S('g4-7'), S('g4-8'),
                {
                    id: "group-eduardo",
                    branch: "left",
                    couple: [
                        { id: "eduardo", name: "Eduardo Saenz de Ugarte Diaz de Antoñana", dates: "14/10/1850 - Fallecido", parentId: "group-manuel" },
                        { id: "maria", name: "Maria Saenz de Ugarte Ruiz de Alda", dates: "11/09/1849 - 1880", parentId: "group-xisto" }
                    ]
                },
                S('g4-10'), S('g4-11'), S('g4-12'),
                R('g4-1'), R('g4-2'),
                {
                    id: "group-fausto",
                    branch: "right",
                    couple: [
                        { id: "fausto", name: "Fausto Gomez de Segura Ocariz", dates: "Desconocida - Fallecido", parentId: "group-alejandro" },
                        { id: "flora", name: "Flora Hilaria Oyarzabal Alava", dates: "24/11/1854 - Fallecida", parentId: "group-juan-francisco" }
                    ]
                },
                R('g4-4'), R('g4-5'), R('g4-6'), R('g4-7'), R('g4-8'),
                {
                    id: "group-domingo",
                    branch: "right",
                    couple: [
                        { id: "domingo", name: "Domingo Argote Lopez de Anviso", dates: "Desconocida - Fallecido", parentId: "group-manuel-argote" },
                        { id: "maria-ramos", name: "Maria Ramos Estavillo Susaeta", dates: "Desconocida - Fallecida", parentId: "group-jose-estavillo" }
                    ]
                },
                R('g4-10'), R('g4-11'), R('g4-12')
            ]
        },
        {
            id: "gen-grandparents",
            groups: [
                S('g3-1'), S('g3-2'), S('g3-3'), S('g3-4'), S('g3-5'),
                {
                    id: "group-nicolas",
                    branch: "left",
                    couple: [
                        { id: "nicolas", name: "Nicolas Garrido Orovio de Echazarra", dates: "1867 - Fallecido", parentId: "group-francisco" },
                        { id: "julia", name: "Julia Saenz de Ugarte Saenz de Ugarte", dates: "28/05/1879 - Fallecida", parentId: "group-eduardo" }
                    ]
                },
                S('g3-7'), S('g3-8'), S('g3-9'), S('g3-10'), S('g3-11'), S('g3-12'),
                R('g3-1'), R('g3-2'), R('g3-3'), R('g3-4'), R('g3-5'),
                {
                    id: "group-claudio",
                    branch: "right",
                    couple: [
                        { id: "claudio", name: "Claudio Fausto Gomez de Segura Oyarzabal", dates: "1887 - Fallecido", parentId: "group-fausto" },
                        { id: "segunda", name: "Segunda Argote Estavillo", dates: "29/03/1892 - Fallecida", parentId: "group-domingo" }
                    ]
                },
                R('g3-7'), R('g3-8'), R('g3-9'), R('g3-10'), R('g3-11'), R('g3-12')
            ]
        },
        {
            id: "gen-parents",
            groups: [
                {
                    id: "group-parents",
                    couple: [
                        { id: "aquilino", name: "Aquilino Garrido Saenz de Ugarte", dates: "17/05/1912 - 08/07/1989", parentId: "group-nicolas" },
                        { id: "angela", name: "Angela Gomez de Segura Argote", dates: "29/09/1918 - 08/06/1999", parentId: "group-claudio" }
                    ]
                }
            ]
        },
        {
            id: "gen-children",
            groups: [
                {
                    id: "group-pedro",
                    parentsId: "group-pedro",
                    couple: [
                        { id: "pedro", name: "Pedro María Garrido Gómez de Segura", dates: "10/01/1952", parentId: "group-parents" },
                        { id: "magdalena", name: "Magdalena Pérez de Unzueta", dates: "29/05/1955" }
                    ],
                    childrenGroups: [
                        {
                            id: "group-dorleta",
                            couple: [
                                { id: "dorleta", name: "Dorleta Garrido Pérez de Unzueta", dates: "10/04/1978" },
                                { id: "paco", name: "Paco González Arana", dates: "30/12/1978" }
                            ],
                            children: [
                                { id: "alluitz", name: "Alluitz Garrido González", dates: "05/12/2014" },
                                { id: "maialen", name: "Maialen Garrido González", dates: "04/11/2016" }
                            ]
                        },
                        {
                            id: "group-ainhoa",
                            couple: [
                                { id: "ainhoa", name: "Ainhoa Garrido Pérez de Unzueta", dates: "07/03/1979" },
                                { id: "javi-ainhoa", name: "Javi Montejo Fontaneda", dates: "31/12/1980" }
                            ],
                            children: [
                                { id: "julen", name: "Julen Montejo Garrido", dates: "26/01/2016" },
                                { id: "jare", name: "Jare Montejo Garrido", dates: "14/04/2018" }
                            ]
                        }
                    ]
                },
                {
                    id: "group-sebastian",
                    parentsId: "group-sebastian",
                    couple: [
                        { id: "sebastian", name: "Sebastián Garrido Gómez de Segura", dates: "20/01/1953", parentId: "group-parents" },
                        { id: "carolina", name: "Carolina Corcuera", dates: "23/12/1961" }
                    ]
                },
                {
                    id: "group-jesus",
                    parentsId: "group-jesus",
                    couple: [
                        { id: "jesus", name: "Jesús Amado Garrido Gómez de Segura", dates: "25/06/1954", parentId: "group-parents" }
                    ]
                },
                {
                    id: "group-glori",
                    parentsId: "group-glori",
                    couple: [
                        { id: "glori", name: "Gloria Asunción Garrido Gómez de Segura", dates: "04/09/1955", parentId: "group-parents" }
                    ]
                },
                {
                    id: "group-blanca",
                    parentsId: "group-blanca",
                    couple: [
                        { id: "blanca", name: "María Blanca de las Nieves Garrido Gómez de Segura", dates: "12/01/1957", parentId: "group-parents" },
                        { id: "jose-maria", name: "José María Fernández Gómez", dates: "19/03/1952 - 15/02/1981" }
                    ],
                    childrenGroups: [
                        {
                            id: "group-inigo",
                            couple: [
                                { id: "inigo", name: "Íñigo Fernández Garrido", dates: "03/10/1979" },
                                { id: "leire", name: "Leyre Abajo Fernández", dates: "08/05/1975" }
                            ],
                            children: [
                                { id: "alaitz", name: "Alaitz Fernández Abajo", dates: "30/05/2014" }
                            ]
                        },
                        {
                            id: "group-david",
                            couple: [
                                { id: "david", name: "David Fernández Garrido", dates: "23/10/1980" },
                                { id: "jaione", name: "Jaione Boveda Rueda", dates: "09/09/1983" }
                            ],
                            children: [
                                { id: "nora", name: "Nora Fernandez Boveda", dates: "06/04/2011" },
                                { id: "asier", name: "Asier Fernandez Boveda", dates: "27/09/2013" }
                            ]
                        }
                    ]
                },
                {
                    id: "group-geni",
                    parentsId: "group-geni",
                    couple: [
                        { id: "geni", name: "María Eugenia Garrido Gómez de Segura", dates: "13/09/1959 - 20/03/2019", parentId: "group-parents" },
                        { id: "ricardo", name: "Ricardo Corres", dates: "15/04/1957" }
                    ],
                    childrenGroups: [
                        {
                            id: "group-igor",
                            couple: [
                                { id: "bea", name: "Bea Artola", dates: "" },
                                { id: "igor", name: "Igor Corres Garrido", dates: "02/04/1981" },
                                { id: "regina", name: "Regina Agramonte Calavia", dates: "" }
                            ],
                            children: [
                                { id: "ruben-hijo", name: "Ruben Corres Artola", dates: "" }
                            ]
                        },
                        {
                            id: "group-ruben",
                            couple: [
                                { id: "ruben", name: "Rubén Corres Garrido", dates: "" }
                            ]
                        },
                        {
                            id: "group-tania",
                            couple: [
                                { id: "tania", name: "Tania Corres Garrido", dates: "31/01/1986" },
                                { id: "aitor", name: "Aitor", dates: "" }
                            ],
                            children: [
                                { id: "alex", name: "Alex", dates: "" }
                            ]
                        },
                        {
                            id: "group-marta",
                            couple: [
                                { id: "marta", name: "Marta Corres Garrido", dates: "26/07/1995" }
                            ]
                        }
                    ]
                },
                {
                    id: "group-abel",
                    parentsId: "group-abel",
                    couple: [
                        { id: "abel", name: "Abel Ricardo Garrido Gómez de Segura", dates: "26/11/1961", parentId: "group-parents" },
                        { id: "edurne", name: "Edurne Pérez de Leceta", dates: "18/11/1966" }
                    ],
                    childrenGroups: [
                        {
                            id: "group-mikel",
                            couple: [
                                { id: "mikel", name: "Mikel Garrido Perez de Leceta", dates: "25/03/1994" },
                                { id: "sara", name: "Sara", dates: "" }
                            ]
                        },
                        {
                            id: "group-andoni",
                            couple: [
                                { id: "andoni", name: "Andoni Garrido Pérez de Leceta", dates: "11/09/1998" }
                            ]
                        }
                    ]
                },
                {
                    id: "group-javi",
                    parentsId: "group-javi",
                    couple: [
                        { id: "jose", name: "José Javier Garrido Gómez de Segura", dates: "20/07/1963", parentId: "group-parents" },
                        { id: "inma", name: "María Inmaculada Mardones", dates: "08/12/1966" }
                    ],
                    childrenGroups: [
                        {
                            id: "group-ane",
                            couple: [
                                { id: "ane", name: "Ane Garrido Mardones", dates: "08/09/1995" }
                            ]
                        }
                    ]
                }
            ]
        }
    ],

    // Biografías
    biographies: [],

    // Pruebas y Resultados de ADN
    adn: [
        {
            id: 1,
            src: "./assets/ADN/ADN 1.jpg",
            title: "Resultados y Estimación Étnica",
            badge: "95,9% Ibérico · 2,2% Finlandés · 1,9% Italiano",
            description: "Resumen de las 3 estimaciones étnicas y 3.647 coincidencias genéticas encontradas.",
            caption: "Resultados de ADN - Javi Garrido Gómez de Segura (95,9% Ibérico, 2,2% Finlandés, 1,9% Italiano)"
        },
        {
            id: 2,
            src: "./assets/ADN/ADN 2.jpg",
            title: "Mapa Genético: Finlandia",
            badge: "2,2% Finlandés",
            description: "Distribución geográfica de la herencia genética en el norte de Europa y Escandinavia.",
            caption: "Mapa Étnico - Región de Finlandia (2,2% coincidencia genética)"
        },
        {
            id: 3,
            src: "./assets/ADN/ADN 3.jpg",
            title: "Origen Etnia Finlandesa",
            badge: "Laponia, Finlandia",
            description: "Contexto histórico, lingüística fino-báltica e influencias nórdicas y eslavas.",
            caption: "Historia y contexto de la etnia finlandesa (Laponia, Finlandia)"
        },
        {
            id: 4,
            src: "./assets/ADN/ADN 4.jpg",
            title: "Mapa Genético: Italia",
            badge: "1,9% Italiano",
            description: "Distribución geográfica de la herencia genética en la península itálica y el Mediterráneo.",
            caption: "Mapa Étnico - Región de Italia (1,9% coincidencia genética)"
        },
        {
            id: 5,
            src: "./assets/ADN/ADN 5.jpg",
            title: "Origen Etnia Italiana",
            badge: "Península Itálica",
            description: "Legado genético y cultural del Imperio Romano, el Renacimiento y su influencia mediterránea.",
            caption: "Historia y contexto cultural de la etnia italiana"
        }
    ],

    // Galería de imágenes
    gallery: [
        { id: 1, src: "./assets/1699609817611.jpg", caption: "Recuerdo familiar 1" },
        { id: 2, src: "./assets/1699609817643.jpg", caption: "Recuerdo familiar 2" },
        { id: 3, src: "./assets/1699609817653.jpg", caption: "Recuerdo familiar 3" },
        { id: 4, src: "./assets/1699609817662.jpg", caption: "Recuerdo familiar 4" },
        { id: 5, src: "./assets/1699609817672.jpg", caption: "Recuerdo familiar 5" },
        { id: 6, src: "./assets/1699624670157.jpg", caption: "Recuerdo familiar 6" },
        { id: 7, src: "./assets/1699625441118.jpg", caption: "Recuerdo familiar 7" },
        { id: 8, src: "./assets/1699822679130.jpg", caption: "Recuerdo familiar 8" },
        { id: 9, src: "./assets/Boda David hermanos.jpg", caption: "Boda David hermanos" },
        { id: 10, src: "./assets/Foto hermanos.jpg", caption: "Foto hermanos" },
        { id: 11, src: "./assets/MA-5 46X55.jpg", caption: "Retrato" },
        { id: 12, src: "./assets/PA-2 46X55.jpg", caption: "Retrato" }
    ]
};
