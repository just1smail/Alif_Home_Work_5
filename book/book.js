const createBook = (title, author, year, isAvailable) => {
    const book = {
        title,
        author,
        year,
        isAvailable,
    }
    return book;
}

console.log(createBook('Канон медицины', 'Абу Али ибн Сина (Авиценна)', 'Около 1025 года', true));