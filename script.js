tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', 'sans-serif'],
                heading: ['Plus Jakarta Sans', 'sans-serif'],
            },
            colors: {
                cream: {
                    50: '#FDFBF7',
                    100: '#F8F4EC',
                    200: '#EFE7D8',
                    300: '#E2D4BC',
                },
                sage: {
                    50: '#F2F6F3',
                    100: '#E1EBE4',
                    500: '#5C836B',
                    600: '#496B56',
                    700: '#395443',
                },
                terracotta: {
                    50: '#FDF5F2',
                    100: '#FAE6DF',
                    400: '#E88363',
                    500: '#D96B48',
                    600: '#C05635',
                },
                bark: {
                    800: '#3D352E',
                    900: '#2A241F',
                }
            }
        }
    }
};

const INITIAL_LIMIT = 4;
let showAllAnimals = false;

function formatAgeText(months) {
    if (months < 12) return `${months} hónapos`;
    const years = Math.floor(months / 12);
    const remMonths = months % 12;
    return remMonths === 0 ? `${years} éves` : `${years} év ${remMonths} hónapos`;
}

function getAgeGroup(months) {
    if (months < 12) return "Kölyök";
    if (months >= 84) return "Idős";
    return "Felnőtt";
}

function getSpeciesIcon(species) {
    switch (species) {
        case "Kutya":
            return "fa-dog";
        case "Macska":
            return "fa-cat";
        case "Nyúl":
            return "fa-rabbit";
        case "Tengerimalac":
        case "Hörcsög":
            return "fa-otter";
        default:
            return "fa-paw";
    }
}

const rawAnimals = [
    {
        name: "Buksi",
        species: "Kutya",
        breed: "Labrador retriever",
        months: 24,
        size: "Nagy",
        shortDesc: "Barátságos, játékos kutya, aki szeret sétálni és labdázni.",
        image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Mici",
        species: "Macska",
        breed: "Házi rövidszőrű",
        months: 12,
        size: "Kicsi",
        shortDesc: "Kedves, kíváncsi cica, aki szeret napos helyeken pihenni.",
        image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Morzsi",
        species: "Kutya",
        breed: "Beagle",
        months: 36,
        size: "Közepes",
        shortDesc: "Energikus, barátságos kutya, rendszeres mozgást igényel.",
        image: "https://images.unsplash.com/photo-1505628346881-b72b27e84530?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Cirmi",
        species: "Macska",
        breed: "Brit rövidszőrű",
        months: 30,
        size: "Közepes",
        shortDesc: "Nyugodt természetű, bújós macska.",
        image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Pamacs",
        species: "Nyúl",
        breed: "Oroszlánfejű törpenyúl",
        months: 8,
        size: "Kicsi",
        shortDesc: "Szelíd, érdeklődő nyuszi, aki szereti a friss zöldségeket.",
        image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Foltos",
        species: "Kutya",
        breed: "Dalmata",
        months: 18,
        size: "Nagy",
        shortDesc: "Aktív, intelligens kutya, sok mozgással és játékkal.",
        image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Kókusz",
        species: "Tengerimalac",
        breed: "Rövidszőrű",
        months: 10,
        size: "Kicsi",
        shortDesc: "Nyugodt, társaságkedvelő kisállat.",
        image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Rex",
        species: "Kutya",
        breed: "Német juhászkutya",
        months: 48,
        size: "Nagy",
        shortDesc: "Figyelmes, tanulékony kutya, aki szeret foglalkozni az emberekkel.",
        image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Hópihe",
        species: "Macska",
        breed: "Perzsa",
        months: 20,
        size: "Közepes",
        shortDesc: "Csendes, nyugodt cica, rendszeres szőrápolást igényel.",
        image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Tappancs",
        species: "Kutya",
        breed: "Mopsz",
        months: 14,
        size: "Kicsi",
        shortDesc: "Játékos, ragaszkodó kutya, aki szeret a gazdája közelében lenni.",
        image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Luna",
        species: "Kutya",
        breed: "Border collie",
        months: 16,
        size: "Közepes",
        shortDesc: "Okos, aktív kutya, aki szívesen tanul új trükköket.",
        image: "https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Mázli",
        species: "Macska",
        breed: "Maine coon",
        months: 28,
        size: "Nagy",
        shortDesc: "Nyugodt, barátságos macska, aki szereti a társaságot.",
        image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Zokni",
        species: "Macska",
        breed: "Házi hosszúszőrű",
        months: 9,
        size: "Kicsi",
        shortDesc: "Játékos kiscica, aki szeret felfedezni és kergetőzni.",
        image: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Brúnó",
        species: "Kutya",
        breed: "Golden retriever",
        months: 40,
        size: "Nagy",
        shortDesc: "Szelíd, családbarát kutya, aki imádja a sétákat.",
        image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Pötyi",
        species: "Nyúl",
        breed: "Holland törpenyúl",
        months: 11,
        size: "Kicsi",
        shortDesc: "Kíváncsi, szelíd nyuszi, aki szeret biztonságos helyen ugrándozni.",
        image: "https://images.unsplash.com/photo-1535241749838-299277b6305f?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Csoki",
        species: "Kutya",
        breed: "Tacskó",
        months: 22,
        size: "Kicsi",
        shortDesc: "Bátor, élénk kutya, aki szeret szimatolni és játszani.",
        image: "https://images.unsplash.com/photo-1612195583950-b8fd34c87093?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Morzsa",
        species: "Macska",
        breed: "Sziámi",
        months: 19,
        size: "Közepes",
        shortDesc: "Beszédes, ragaszkodó cica, aki szereti az emberi társaságot.",
        image: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Samu",
        species: "Kutya",
        breed: "Francia bulldog",
        months: 32,
        size: "Közepes",
        shortDesc: "Vidám, szeretetteljes kutya, aki szívesen pihen a gazdája mellett.",
        image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Gombóc",
        species: "Tengerimalac",
        breed: "Rozettás",
        months: 7,
        size: "Kicsi",
        shortDesc: "Barátságos kisállat, aki szereti a nyugodt környezetet.",
        image: "https://images.unsplash.com/photo-1591382386627-349b692688ff?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Nala",
        species: "Macska",
        breed: "Bengáli",
        months: 15,
        size: "Közepes",
        shortDesc: "Élénk, kíváncsi macska, aki szeret mászni és játszani.",
        image: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Dió",
        species: "Kutya",
        breed: "Corgi",
        months: 26,
        size: "Kicsi",
        shortDesc: "Vidám, okos kutya, aki szeret sétálni és tanulni.",
        image: "https://images.unsplash.com/photo-1612536057832-2ff7ead58194?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Füge",
        species: "Nyúl",
        breed: "Mini kosorrú",
        months: 13,
        size: "Kicsi",
        shortDesc: "Szelíd nyuszi, aki szeret búvóhelyeken pihenni.",
        image: "https://images.unsplash.com/photo-1452857297128-d9c29adba80b?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Max",
        species: "Kutya",
        breed: "Boxer",
        months: 29,
        size: "Nagy",
        shortDesc: "Játékos, energikus kutya, aki sok mozgást igényel.",
        image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Panka",
        species: "Macska",
        breed: "Ragdoll",
        months: 21,
        size: "Közepes",
        shortDesc: "Nyugodt, kedves cica, aki szeret ölben pihenni.",
        image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Bogyó",
        species: "Hörcsög",
        breed: "Szíriai aranyhörcsög",
        months: 6,
        size: "Kicsi",
        shortDesc: "Apró, kíváncsi kisállat, aki főként este aktív.",
        image: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Zeusz",
        species: "Kutya",
        breed: "Német dog",
        months: 54,
        size: "Nagy",
        shortDesc: "Nyugodt, kedves természetű, nagy termetű kutya.",
        image: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Molly",
        species: "Macska",
        breed: "Skót lógófülű",
        months: 17,
        size: "Közepes",
        shortDesc: "Csendes, barátságos cica, aki szeret kényelmes helyeken pihenni.",
        image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Picur",
        species: "Tengerimalac",
        breed: "Amerikai",
        months: 14,
        size: "Kicsi",
        shortDesc: "Társaságkedvelő kisállat, aki szereti a friss szénát.",
        image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Teddy",
        species: "Kutya",
        breed: "Uszkár",
        months: 20,
        size: "Közepes",
        shortDesc: "Intelligens, tanulékony kutya, aki szeret foglalkozásokon részt venni.",
        image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Szofi",
        species: "Macska",
        breed: "Norvég erdei",
        months: 34,
        size: "Nagy",
        shortDesc: "Barátságos, kíváncsi macska, aki szeret magas helyekre felmászni.",
        image: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?auto=format&fit=crop&w=800&q=80"
    }
];

const animalsData = rawAnimals.map((pet, idx) => ({
    id: idx + 1,
    name: pet.name,
    species: pet.species,
    breed: pet.breed,
    ageGroup: getAgeGroup(pet.months),
    ageText: formatAgeText(pet.months),
    size: pet.size,
    gender: "Menhelyi védenc",
    vaccinated: true,
    neutered: "Állatorvosilag ellenőrizve",
    image: pet.image,
    shortDesc: pet.shortDesc,
    traits: [pet.species, pet.size, formatAgeText(pet.months)],
    story: `${pet.shortDesc} Jelenleg a PetHeaven menhely gondozásában várja a mindennapi gondoskodást és a figyelmet.`
}));

function toggleMoreAnimals() {
    showAllAnimals = !showAllAnimals;
    renderAnimals();
}

function renderAnimals() {
    const grid = document.getElementById("animalsGrid");
    if (!grid) return;

    const resultCount = document.getElementById("resultCount");
    const heroActive = document.getElementById("heroActiveAnimals");

    if (resultCount) resultCount.textContent = animalsData.length;
    if (heroActive) heroActive.textContent = animalsData.length;
    grid.innerHTML = "";

    const visibleAnimals = showAllAnimals ? animalsData : animalsData.slice(0, INITIAL_LIMIT);

    visibleAnimals.forEach(pet => {
        const speciesIcon = getSpeciesIcon(pet.species);
        const card = document.createElement("article");
        card.className = "bg-white rounded-3xl overflow-hidden border border-cream-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group";

        card.innerHTML = `
            <div>
                <div class="relative aspect-[4/3] overflow-hidden bg-cream-100 cursor-pointer" onclick="openDetailModal(${pet.id})">
                    <img src="${pet.image}" alt="${pet.name}"
                         onerror="this.src='https://placehold.co/600x450/EFE7D8/3D352E?text=${encodeURIComponent(pet.name)}'"
                         class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">

                    <span class="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-bark-900 text-xs font-extrabold shadow-sm flex items-center gap-1.5">
                        <i class="fa-solid ${speciesIcon} text-sage-600"></i>
                        ${pet.species}
                    </span>
                </div>

                <div class="p-5">
                    <div class="flex items-baseline justify-between gap-2 mb-1">
                        <h3 class="font-heading font-extrabold text-xl text-bark-900 group-hover:text-sage-600 transition-colors cursor-pointer" onclick="openDetailModal(${pet.id})">${pet.name}</h3>
                        <span class="text-xs font-bold text-bark-800/60">${pet.size}</span>
                    </div>
                    <p class="text-xs font-semibold text-bark-800/70 mb-3">${pet.breed}</p>

                    <div class="flex flex-wrap gap-1.5 mb-3.5">
                        <span class="px-2.5 py-1 rounded-xl bg-sage-50 text-sage-700 text-xs font-bold border border-sage-100">
                            <i class="fa-regular fa-clock mr-1"></i>${pet.ageText}
                        </span>
                        <span class="px-2.5 py-1 rounded-xl bg-cream-100 text-bark-800 text-xs font-bold">
                            <i class="fa-solid fa-ruler-vertical mr-1 text-bark-800/50"></i>${pet.size}
                        </span>
                    </div>

                    <p class="text-sm text-bark-800/80 line-clamp-2 leading-relaxed">
                        ${pet.shortDesc}
                    </p>
                </div>
            </div>

            <div class="px-5 pb-5 pt-1">
                <button type="button" onclick="openDetailModal(${pet.id})"
                        class="w-full py-2.5 px-4 rounded-2xl bg-sage-500 hover:bg-sage-600 text-white font-bold text-sm transition-colors flex items-center justify-center gap-2 shadow-sm">
                    <i class="fa-solid fa-paw"></i>
                    <span>Adatlap</span>
                </button>
            </div>
        `;
        grid.appendChild(card);
    });

    let toggleWrapper = document.getElementById("moreAnimalsWrapper");
    if (!toggleWrapper && animalsData.length > INITIAL_LIMIT) {
        toggleWrapper = document.createElement("div");
        toggleWrapper.id = "moreAnimalsWrapper";
        toggleWrapper.className = "mt-10 flex justify-center";
        grid.parentNode.appendChild(toggleWrapper);
    }

    if (toggleWrapper && animalsData.length > INITIAL_LIMIT) {
        const remainingCount = animalsData.length - INITIAL_LIMIT;
        toggleWrapper.innerHTML = `
            <button type="button" onclick="toggleMoreAnimals()"
                    class="px-7 py-3.5 rounded-2xl bg-cream-100 hover:bg-cream-200 text-bark-900 font-bold text-sm border border-cream-300 shadow-sm transition-all flex items-center gap-2.5">
                <i class="fa-solid ${showAllAnimals ? "fa-chevron-up" : "fa-chevron-down"} text-sage-600"></i>
                <span>${showAllAnimals ? "Kevesebb állat mutatása" : `További állatok (${remainingCount})`}</span>
            </button>
        `;
    }
}

function openDetailModal(petId) {
    const pet = animalsData.find(p => p.id === petId);
    if (!pet) return;

    const modal = document.getElementById("detailModal");
    if (!modal) return;

    const modalImg = document.getElementById("modalPetImage");
    modalImg.onerror = () => {
        modalImg.src = `https://placehold.co/600x450/EFE7D8/3D352E?text=${encodeURIComponent(pet.name)}`;
    };
    modalImg.src = pet.image;
    modalImg.alt = pet.name;

    document.getElementById("modalPetSpeciesBadge").textContent = pet.species;
    document.getElementById("modalPetGender").textContent = pet.gender;
    document.getElementById("modalPetName").textContent = pet.name;
    document.getElementById("modalPetBreed").textContent = pet.breed;
    document.getElementById("modalPetAgeSize").textContent = `${pet.ageText} • ${pet.size}`;
    document.getElementById("modalPetNeutered").textContent = pet.neutered;

    const storyEl = document.getElementById("modalPetStory");
    if (storyEl) storyEl.textContent = pet.story;

    const traitsContainer = document.getElementById("modalPetTraits");
    if (traitsContainer) {
        traitsContainer.innerHTML = pet.traits.map(trait =>
            `<span class="px-3 py-1 rounded-xl bg-sage-50 text-sage-700 text-xs font-bold border border-sage-100">${trait}</span>`
        ).join("");
    }

    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add("hidden");
    document.body.style.overflow = "";
}

window.addEventListener("DOMContentLoaded", () => {
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const mobileMenu = document.getElementById("mobileMenu");
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
        });
    }

    document.querySelectorAll(".modal-backdrop").forEach(backdrop => {
        backdrop.addEventListener("click", (e) => {
            if (e.target === backdrop) {
                closeModal(backdrop.id);
            }
        });
    });

    renderAnimals();
});
