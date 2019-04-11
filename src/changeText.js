import sketch, { Document } from 'sketch';

export default function(context) {
    // get selection
    const document = Document.getSelectedDocument();
    const selection = document.selectedLayers;
    console.log(selection.length);
    // iterate over selection
    selection.forEach(layer => {
        // check if layer is text layer
        if (layer.type === 'Text') {
            // change layer text string to 'YEET'
            layer.text = 'YEEET'
        }
    })
}

