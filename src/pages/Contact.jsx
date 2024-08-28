export default function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <form>
        <div className="form-group">
          <label for="name">Name:</label>
          <input type="email" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter name" />
        </div>
        <div className="form-group">
          <label for="email">Email address:</label>
          <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea class="form-control" id="message" rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-primary my-2">Submit</button>
      </form>
    </div>
  );
}
