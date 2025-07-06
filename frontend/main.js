async function loadIncidents() {
  const zone = document.getElementById('zoneFilter').value;
  const res = await fetch(`http://localhost:3000/api/incidents?zone=${zone}`, {
    headers: { Authorization: 'Bearer admin-token' }
  });
  const incidents = await res.json();
  const list = document.getElementById('incidentList');
  list.innerHTML = '';
  incidents.forEach(i => {
    const item = document.createElement('li');
    item.innerHTML = `<strong>${i.title}</strong> (${i.status}) - ${i.zone} [${i.type}, ${i.urgency}]`;
    list.appendChild(item);
  });
}
window.onload = loadIncidents;
