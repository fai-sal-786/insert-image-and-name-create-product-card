let fruits = [];

function addFruit() {
    const fruitNameInput = document.getElementById('fruitName');
    const fruitImageInput = document.getElementById('fruitImage');
    const fruitName = fruitNameInput.value.trim();
    const fruitImage = fruitImageInput.value.trim();

    if (fruitName && fruitImage) {
        const newFruit = { id: Date.now(), name: fruitName, imageUrl: fruitImage };
        fruits.push(newFruit);
        fruitNameInput.value = '';
        fruitImageInput.value = '';
        renderFruits();
    }
}

function deleteFruit(id) {
    fruits = fruits.filter(fruit => fruit.id !== id);
    renderFruits();
}

function editFruit(id) {
    const newName = prompt('Enter new name for the fruit:');
    const newImageUrl = prompt('Enter new image URL for the fruit:');

    if (newName && newImageUrl) {
        const fruit = fruits.find(fruit => fruit.id === id);
        if (fruit) {
            fruit.name = newName;
            fruit.imageUrl = newImageUrl;
            renderFruits();
        }
    }
}

function renderFruits() {
    const list = document.getElementById('list');
    list.innerHTML = '';

    fruits.forEach(fruit => {
        const card = document.createElement('div');
        card.className = 'p-4 lg:w-1/4 md:w-1/2 sm:w-full';
        card.innerHTML = `
            <div class="h-full bg-white border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="${fruit.imageUrl}" alt="${fruit.name}">
                <div class="p-6">
                    <h2 class="text-lg text-gray-900 font-medium title-font mb-2">${fruit.name}</h2>
                    <div class="flex items-center flex-wrap">
                        <button onclick="editFruit(${fruit.id})" class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Edit</button>
                        <button onclick="deleteFruit(${fruit.id})" class="text-red-500 inline-flex items-center md:mb-2 lg:mb-0 ml-4">Delete</button>
                    </div>
                </div>
            </div>
        `;
        list.appendChild(card);
    });
}

// Initial render
renderFruits();