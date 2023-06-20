const headsets = [null, null, null, null];
const headsetElements = [1, 2, 3, 4].map(n => document.getElementById(`headset-${n}`));
const playerHistory = [];
const queue = document.getElementById('users-in-queue');

function destroyFromQueue(btn) {
  btn.parentElement.parentElement.remove();
  let i = 1;
  if (queue.hasChildNodes) {
    queue.querySelectorAll('.card').forEach(child => {
      child.querySelector('.queue_priority').innerHTML = i;
      i++;
    });
  }
}

function addToHeadset(btn) {
  if (headsets.indexOf(null) !== -1) {
    const wrapper = (content) => `${content}<div class="d-flex flex-row justify-content-start align-items-center"></div><hr><button class="btn btn-danger btn-block remove_headset" onclick="removeFromHeadset(this)" type="button">remove from headset</button></div>`
    const name = (name) => `<p class="h4">${name}</p>`
    const phoneNumber = (number) => `<p>${number}</p>`

    let username = btn.parentElement.childNodes[0].textContent.split(' ');
    username.shift();
    username = username.join(' ');
    const userPhoneNumber = btn.parentElement.childNodes[1].textContent
    const idx = headsets.indexOf(null);
    headsets[idx] = 1;
    headsetElements[idx].innerHTML = wrapper(name(username) + phoneNumber(userPhoneNumber))
    
    playerHistory.push({ name: username, phoneNumber: userPhoneNumber, headset: idx + 1, timeAdded: moment().format('MM/DD hh:mm:ss A')});

    destroyFromQueue(btn);
  }
}

function displayHistory() {
  const historyContent = document.getElementById('history-content');
  console.log(playerHistory);
  historyContent.innerHTML = playerHistory.map(p => `<p class="mb-1 fw-bold">${p.name} (+${p.phoneNumber})</p><small>Added to headset-${p.headset} at ${p.timeAdded}</small>`).join('<hr>')
}

function notifyUser(btn) {
  btn.setAttribute('disabled', true);
  const recipient = btn.previousElementSibling.previousElementSibling;
  async function sendSMS (to, name, btn) {
    axios
      .post('http://localhost:3000/', {
        to,
        name,
      })
      .then(response => {
        btn.setAttribute('disabled', true);
        console.log('sent!', response);
        // append to DOM
      })
      .catch(error => console.error(error))
    console.log('hi');
  }
  const n = recipient.previousElementSibling.textContent.split(' ');
  n.shift();
  sendSMS(recipient.textContent, n.join(' '), btn)
}

function removeFromHeadset(btn) {
  headsets[parseInt(btn.parentElement.id.split('-')[1]) - 1] = null;
  btn.parentElement.innerHTML = '';
}

document.getElementById('add_user').addEventListener('click', () => {
  if (document.getElementById('user-name').value.length < 1 || document.getElementById('phone-number').value.length < 1) {
    return;
  }
  const username = document.getElementById('user-name').value;
  const phoneNumber = document.getElementById('phone-number').value;

  const card = (content) => `<div class="card my-2"><div class="card-body d-flex flex-column">${content}<button type="button" class="btn btn-danger btn-block destroy_from_queue my-1" onclick="destroyFromQueue(this)">Remove from queue</button><button type="button" class="btn btn-primary btn-block notify_user my-1" onclick="notifyUser(this)">Notify</button><button type="button" class="btn btn-success btn-block add_to_headset my-1" onclick="addToHeadset(this)">Add to headset</button></div></div>`;
  const details = (name, number) => `<p class="h5"><span class="badge bg-secondary queue_priority">${queue.childElementCount + 1}</span> ${name}</p><p>1${number}</p>`

  queue.innerHTML += card(details(username, phoneNumber));
});

