function highlightHTMLContent(
    htmlContent,
    plainText,
    plainTextPositions
) {
    function insertTag(str, index, tag) {
        const prefix = str.slice(0, index);
        const suffix = str.slice(index);
        const modifiedString = prefix + tag + suffix;
        return modifiedString;
    } 
    const arrayOfWord = plainText.split(' ')
    const arrayOfHTML = htmlContent.split(' ')

    // console.log(arrayOfHTML)

    for (let i = 0; i < plainTextPositions.length; i++) {
        const position = plainTextPositions[i];
        const { start, end } = position;

        const substringToHighlight = plainText.substring(start, end);


        let count = 0;
        let len = 0;

        let index = -1;

        for (let j = 0; j < arrayOfWord.length; j++) {

            if (arrayOfWord[j] === substringToHighlight) {
                //   console.log(arrayOfWord[j]); 
                count++;
            }
        }




        for (let j = 0; j < arrayOfHTML.length; j++) {
            // console.log(arrayOfHTML[j] == substringToHighlight);
            if(arrayOfHTML[j] == substringToHighlight){
                count--;
            }
            if (count === 0) {
                // console.log(arrayOfHTML[j])
                index = j;
                break
            }
            
        }


        arrayOfHTML.splice(index, 0, "<mark>")
        arrayOfHTML.splice(index + 2, 0, "</mark>")
        
        htmlContent = arrayOfHTML.join(' ')
       
        


        const startIndex = htmlContent.indexOf(substringToHighlight);
        const endIndex = startIndex + substringToHighlight.length;

        if (startIndex !== -1) {
            const openingTag = "<mark>";
            const closingTag = "</mark>";

            htmlContent = insertTag(htmlContent, startIndex, openingTag);
            htmlContent = insertTag(htmlContent, endIndex + openingTag.length, closingTag
            );
        }
    }

    return htmlContent;
}

const htmlContent =
    '<p><span>Hi David<br><br>Headline: Energix Closes $520 Million Financing and Tax Equity Deal to Fund New Solar Projects<br><br>Summary: Two deals with Morgan Stanley Renewables Inc. and Santander CIB will help finance the construction and operation of six utility Equity scale solar…<br><br>Read the full article <a href="https://content.seleritycorp.com/hosted/assets/www/UKMW47_hYz_RGzPSpHm44Hi1L49HdNBhs1OkKKW2OPI">here</a><br><br>-------------------------------------<br><br>You received this because you are subscribed to news related to <a href="https://iris.steeleye.co/market/instruments?search=ES0113900J37">ES0113900J37</a>, and this story was marked as 82% relevant.<br><br>Copyright of PR Newswire. All Rights Reserved. Terms and Conditions | Privacy Policy. To stop PR Newswire emails from getting removed by email filters please add our address (noreply@prnewswire.com) to your email address book. Registered Office: 3 Spring Mews, London SE11 5AN. Tel: +44 (0) 207 8405100. <br><br>To unsubscribe change your email preferences, please click <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">here</a>.<br><br>-------------------------------------<br><br><img src="https://context.seleritycorp.com/selerity/assets/sc_icons/pressRelease.png" alt="Rick Astley" style="width:100px;height:100px;"></span></p>';
const plainText =
    'Hi David Headline: Energix Closes $520 Million Financing and Tax Equity Deal to Fund New Solar Projects Summary: Two deals with Morgan Stanley Renewables Inc. and Santander CIB will help finance the construction and operation of six utility Equity scale solar… Read the full article here ------------------------------------- You received this because you are subscribed to news related to ES0113900J37 , and this story was marked as 82% relevant. Copyright of PR Newswire. All Rights Reserved. Terms and Conditions | Privacy Policy. To stop PR Newswire emails from getting removed by email filters please add our address (noreply@prnewswire.com) to your email address book. Registered Office: 3 Spring Mews, London SE11 5AN. Tel: +44 (0) 207 8405100. To unsubscribe change your email preferences, please click here . -------------------------------------';
const plainTextPositions = [
    {
        start: 241,
        end: 247,
    },
    {
        start: 518,
        end: 525,
    },
];

const highlightedContent = highlightHTMLContent(
    htmlContent,
    plainText,
    plainTextPositions
);
 
document.getElementById('contentToBeHighlighted').innerHTML = highlightedContent;