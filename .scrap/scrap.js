fetch('process-order', {
    method: 'POST',
    headers: reqHeaders,
    body: JSON.stringify(data)
})
.catch(err => {
    alert('Order error: ' + err)
})
.then(response => {
    if (!response.ok) {
        return response.json().then(
        errorInfo => Promise.reject(errorInfo)) //UPDATE HERE
    }
    return response.json() //UPDATE HERE
})
.then(data => {
    console.log(data) //UPDATE HERE
    console.log('Payment complete successfully!')
.catch(err => {
    console.log
})