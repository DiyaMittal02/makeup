function toggleServicesParagraph() {
    const paragraph = document.getElementById('services-paragraph');
    if (paragraph.style.display === 'none') {
        paragraph.style.display = 'block'; // Show the paragraph
    } else {
        paragraph.style.display = 'none'; // Hide the paragraph
    }
}
