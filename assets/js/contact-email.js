document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form')
  const button = document.querySelector('.submit-btn')
  const status = document.getElementById('status')

  const formStartTime = Date.now()

  const CONFIG = {
    API_URL: 'https://send-contact-email-794036390564.europe-north2.run.app',
  }

  if (form) {
    form.addEventListener('submit', async function (e) {
      e.preventDefault()

      const website = document.getElementById('website').value

      button.disabled = true
      button.textContent = 'Sending...'
      status.innerText = 'Sending message...'

      const name = document.getElementById('name').value
      const email = document.getElementById('email').value
      const message = document.getElementById('message').value

      const data = {
        name,
        email,
        message,
        website,
        startTime: formStartTime,
      }

      try {
        const res = await fetch(CONFIG.API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })

        const text = await res.text()

        if (res.ok) {
          status.innerText = '✅ Message sent successfully!'
          form.reset()
        } else {
          status.innerText = '❌ ' + text
        }
      } catch (err) {
        console.error(err)
        status.innerText = '❌ Error sending message'
      } finally {
        button.disabled = false
        button.textContent = 'Send Message'
      }
    })
  }
})
