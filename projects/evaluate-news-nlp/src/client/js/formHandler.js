function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    
    Client.checkForName(formText)

    const formdata = new FormData();
    formdata.append("key", "955da75ad665f467bd061cc400fe5c55");
    formdata.append("txt", formText);
    formdata.append("lang", "en");

    const requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
      };

    console.log("::: Form Submitted :::")

    fetch('https://api.meaningcloud.com/sentiment-2.1', requestOptions)
    .then(res => res.json())
    .then(function(res) {
        console.log(res)
        document.getElementById('results').innerHTML = `${res.subjectivity} <br> ${res.sentence_list[0].text} <br> ${res.agreement} <br> ${res.confidence}`
    })
}

export { handleSubmit }
