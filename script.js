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

const animalsData = [
    {
        id: 1,
        name: "Bodri",
        species: "Kutya",
        breed: "Puli keverék",
        ageGroup: "Felnőtt",
        ageText: "3 éves",
        size: "Közepes",
        gender: "Hím",
        vaccinated: true,
        neutered: "Igen",
        image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80",
        shortDesc: "Vidám, energikus, labdabolond kutyus, aki imádja a nagy sétákat és a gyerekeket.",
        traits: ["Barátságos", "Játékos", "Gyerekbarát", "Okos"],
        story: "Bodrit egy helyi park szélén találták tavaly ősszel. Gyorsan kiderült, hogy végtelenül hálás és ragaszkodó természet. Kiváló társ aktív családok mellé, akik szívesen kirándulnak vele."
    },
    {
        id: 2,
        name: "Cirmi",
        species: "Macska",
        breed: "Európai rövidszőrű (cirmos)",
        ageGroup: "Kölyök",
        ageText: "6 hónapos",
        size: "Kicsi",
        gender: "Nőstény",
        vaccinated: true,
        neutered: "Még nem (korából adódóan)",
        image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80",
        shortDesc: "Bújós, doromboló kiscica, aki minden tollas pálcát levadászik, majd az öledben alszik el.",
        traits: ["Dorombolós", "Szobatiszta", "Kíváncsi", "Bújós"],
        story: "Cirmi testvéreivel együtt került a menhelyre. Már az első naptól kezdve keresi az ember közelségét. Szobacicának ajánljuk, ahol biztonságban fedezheti fel a világot."
    },
    {
        id: 3,
        name: "Morzsi",
        species: "Kutya",
        breed: "Tacskó keverék",
        ageGroup: "Idős",
        ageText: "9 éves",
        size: "Kicsi",
        gender: "Hím",
        vaccinated: true,
        neutered: "Igen",
        image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=800&q=80",
        shortDesc: "Nyugodt, méltóságteljes idős úr, aki egy puha fekhelyre és rövid, kellemes sétákra vágyik.",
        traits: ["Nyugodt", "Ragaszkodó", "Lakásba is ideális", "Csendes"],
        story: "Morzsi idős gazdája kórházba kerülése után jutott gondozásunkba. Nagyon jól nevelt, pórázon szépen sétál, és semmi másra nem vágyik, csak egy békés nyugdíjas otthonra."
    },
    {
        id: 4,
        name: "Luna",
        species: "Macska",
        breed: "Fekete házimacska",
        ageGroup: "Felnőtt",
        ageText: "2 éves",
        size: "Közepes",
        gender: "Nőstény",
        vaccinated: true,
        neutered: "Igen",
        image: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?auto=format&fit=crop&w=800&q=80",
        shortDesc: "Elegáns, smaragdzöld szemű szépség, aki kezdetben félénk, de hamar megnyílik.",
        traits: ["Elegáns", "Szobatiszta", "Nyugodt", "Más cicákkal kijön"],
        story: "Luna egy elhagyatott tanyáról érkezett. Kicsit félénk az idegenekkel, de ha türelmes vagy vele, a világ legkedvesebb és leghűségesebb cicája válik belőle."
    },
    {
        id: 5,
        name: "Rex",
        species: "Kutya",
        breed: "Német juhász keverék",
        ageGroup: "Felnőtt",
        ageText: "4 éves",
        size: "Nagy",
        gender: "Hím",
        vaccinated: true,
        neutered: "Igen",
        image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?auto=format&fit=crop&w=800&q=80",
        shortDesc: "Hűséges, okos és figyelmes nagytestű kutya, aki kiváló családi kedvenc és házőrző.",
        traits: ["Hűséges", "Tanulékony", "Kiegyensúlyozott", "Kertes házba"],
        story: "Rex kiváló idegrendszerű, nagyon intelligens kutya. Alap vezényszavakat ismeri, imádja a jutalomfalatokat és a közös feladatokat. Kertes házba ajánljuk bejárással."
    },
    {
        id: 6,
        name: "Mici",
        species: "Macska",
        breed: "Vörös-fehér cica",
        ageGroup: "Idős",
        ageText: "8 éves",
        size: "Közepes",
        gender: "Nőstény",
        vaccinated: true,
        neutered: "Igen",
        image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=800&q=80",
        shortDesc: "Napfényimádó, békés természetű cica, aki az ablakpárkányról szeretné figyelni a madarakat.",
        traits: ["Békés", "Öleb", "Szobatiszta", "Kezdőknek is ajánlott"],
        story: "Mici egy igazi szeretetgombóc. Nem igényli a pörgést, szívesen szundikál egész délután, este pedig halkan dorombolva kéri a simogatást."
    },
    {
        id: 7,
        name: "Bogyó",
        species: "Kutya",
        breed: "Magyar vizsla keverék",
        ageGroup: "Kölyök",
        ageText: "7 hónapos",
        size: "Közepes",
        gender: "Hím",
        vaccinated: true,
        neutered: "Még nem (korából adódóan)",
        image: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=800&q=80",
        shortDesc: "Kíváncsi, selymes fülű kölyökkutya, aki mindenkit azonnal levesz a lábáról.",
        traits: ["Kölyök energia", "Bújós", "Kutyabarát", "Játékos"],
        story: "Bogyó egy igazi kis bohóc! Minden új játék érdekli, remekül kijön más kutyákkal is. Olyan gazdit keres, aki szívesen viszi majd kutyaiskolába."
    },
    {
        id: 8,
        name: "Bella",
        species: "Kutya",
        breed: "Golden Retriever keverék",
        ageGroup: "Felnőtt",
        ageText: "5 éves",
        size: "Nagy",
        gender: "Nőstény",
        vaccinated: true,
        neutered: "Igen",
        image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80",
        shortDesc: "Végtelenül szelíd, mosolygós kutyalány, aki minden emberben a legjobb barátját látja.",
        traits: ["Szelíd", "Családcentrikus", "Türelmes", "Vízkedvelő"],
        story: "Bella a menhelyünk egyik legkedvesebb lakója. Türelmes, békés, és minden simogatásért végtelen hálával fizet. Családok mellé tökéletes választás."
    }
];

function renderAnimals() {
    const grid = document.getElementById("animalsGrid");
    if (!grid) return;

    const resultCount = document.getElementById("resultCount");
    const heroActive = document.getElementById("heroActiveAnimals");

    if (resultCount) resultCount.textContent = animalsData.length;
    if (heroActive) heroActive.textContent = animalsData.length;
    grid.innerHTML = "";

    animalsData.forEach(pet => {
        const speciesIcon = pet.species === "Kutya" ? "fa-dog" : "fa-cat";
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
                        <span class="text-xs font-bold text-bark-800/60">${pet.gender}</span>
                    </div>
                    <p class="text-xs font-semibold text-bark-800/70 mb-3">${pet.breed}</p>

                    <div class="flex flex-wrap gap-1.5 mb-3.5">
                        <span class="px-2.5 py-1 rounded-xl bg-sage-50 text-sage-700 text-xs font-bold border border-sage-100">
                            <i class="fa-regular fa-clock mr-1"></i>${pet.ageGroup} (${pet.ageText})
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
}

function openDetailModal(petId) {
    const pet = animalsData.find(p => p.id === petId);
    if (!pet) return;

    const modal = document.getElementById("detailModal");
    if (!modal) return;

    document.getElementById("modalPetImage").src = pet.image;
    document.getElementById("modalPetImage").alt = pet.name;
    document.getElementById("modalPetSpeciesBadge").textContent = pet.species;
    document.getElementById("modalPetGender").textContent = pet.gender;
    document.getElementById("modalPetName").textContent = pet.name;
    document.getElementById("modalPetBreed").textContent = pet.breed;
    document.getElementById("modalPetAgeSize").textContent = `${pet.ageGroup} (${pet.ageText}) • ${pet.size}`;
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