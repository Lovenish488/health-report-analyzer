function Reminder() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Reminder</h1>

      <input type="text" placeholder="Reminder Title" /><br /><br />
      <input type="date" /><br /><br />

      <button>Set Reminder</button>

      <h3 style={{ marginTop: "30px" }}>Upcoming Reminders</h3>
      <ul>
        <li>Doctor Visit - 25 March</li>
        <li>Medicine Refill - 28 March</li>
      </ul>
    </div>
  );
}

export default Reminder;