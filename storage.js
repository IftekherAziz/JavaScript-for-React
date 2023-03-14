
const addToLocalStorage = ()=> {
    const storageId = document.getElementById('storage-id');
    const id = storageId.value;
    const storageValue = document.getElementById('storage-value');
    const value = storageValue.value;

    // Add to local storage:
    if (id === '' || value === '') {
        alert('Please enter a valid id and value');
        storageId.value = '';
        storageValue.value = '';
        return;

    }
    localStorage.setItem(id, value);
    storageId.value = '';
    storageValue.value = '';
}