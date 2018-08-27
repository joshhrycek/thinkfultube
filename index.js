function getVidInfo() {
    $('.submitButton').on('click',event => {
        event.preventDefault();
        let vidTitle = $('.textbox').val();
        console.log(vidTitle)
        });
    }

function generateListItem(){
    return ``
}

function renderResults() {

}

function createList(){
    getVidInfo()
}

$(createList)