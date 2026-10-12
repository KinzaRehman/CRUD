const deleteButton = document.querySelector('#delete-button')
const messageDiv = document.querySelector('#message')

console.log('Delete button found:', deleteButton)

deleteButton.addEventListener('click', () => {
    console.log('Delete button clicked!')

    fetch('/quotes', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: 'Darth Vader'
        })
    })
        .then(res => {
            console.log('Server status:', res.status)
            if (!res.ok) throw new Error('Delete request failed')
            return res.json()
        })
        .then(response => {
            console.log('Server response:', response)

            if (response === 'No quote to delete') {
                messageDiv.textContent = 'No Darth Vader quote to delete'
            } else {
                window.location.reload()
            }
        })
        .catch(error => console.error(error))
})