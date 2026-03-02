const app = document.getElementById('app')

document.querySelectorAll('.dlt-btn').forEach(dltBtn => {
    dltBtn.addEventListener('click', async () => {
        const msgId = dltBtn.dataset.id
        fetch(`/msg/${msgId}`, {method: 'delete'})
            .then(msg => {
                location.reload()
                console.log(msg)
            })
            .catch(err => {
                console.error(err)
                alert(err.message || 'Error occured when trying to delete the message!')
            })
    })
})

document.querySelectorAll('.edt-btn').forEach(edtBtn => {
    edtBtn.addEventListener('click', () => {
        if (app.dataset.editId) return

        app.dataset.editId = edtBtn.dataset.id
        const editId = app.dataset.editId

        const msgLine = document.getElementById(editId)
        msgLine.classList.add('open-edit-panel')

        document.getElementById(app.dataset.editId + '-cancel-edit-btn').addEventListener('click', () => {
            msgLine.classList.remove('open-edit-panel')
            app.dataset.editId = null
        })

        document.getElementById(editId + '-submit-edit-btn').addEventListener('click', (e) => {
            const editedText = document.getElementById(editId + '-new-msg')
            fetch(`/msg/${editId}`, {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    content: editedText.value
                })
            })
            .then(msg => {
                location.reload()
                console.log(msg)
            })
            .catch(err => {
                console.error(err)
                alert(err.message || 'Error occured when trying to edit the message!')
            })
        })
    })
})