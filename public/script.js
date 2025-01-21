window.onload = function(){
    const convertor = new showdown.Converter();
    const pad = document.getElementById('pad');
    const markdown = document.getElementById('markdown');

    const convertAreaToMarkDown = () => {
        const markdownText = pad.value;
        html = convertor.makeHtml(markdownText);
        markdown.innerHTML = html;
    }

    pad.addEventListener('input', convertAreaToMarkDown);

    convertAreaToMarkDown();
}