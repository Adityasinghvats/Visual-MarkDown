window.onload = function(){
    const convertor = new showdown.Converter();
    const pad = document.getElementById('pad');
    const markdown = document.getElementById('markdown');

    let previousMarkdown;

    const convertAreaToMarkDown = () => {
        const markdownText = pad.value;
        previousMarkdown = markdownText;
        html = convertor.makeHtml(markdownText);
        markdown.innerHTML = html;
    }

    //check if something in pad changes
    const didChangeOccur = function(){
        if(previousMarkdown != pad.value){
            return true;
        }
        else return false;
    };

    //check for change every 1 second
    setInterval(() => {
        if(didChangeOccur()){
            convertAreaToMarkDown();
        }
    }, 1000);

    pad.addEventListener('input', convertAreaToMarkDown);

    sharejs.open('home', 'text', (err, doc) => {
        doc.attach_textarea(pad);
        convertAreaToMarkDown();
    })

    // convertAreaToMarkDown();
}
