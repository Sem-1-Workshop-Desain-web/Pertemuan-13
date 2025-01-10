// Import file CSS dan bootstrap untuk styling
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Komponen utama Tugas_1
function Tugas_1() {
  return (
    <div className="container mx-auto py-4">
      {/* Bagian atas dengan teks sign-in di kanan atas */}
      <div className="d-flex justify-content-end text-slate-400 text-lg">
        <p>
          I already have an account
          <a className="ml-2 text-lg font-bold text-teal-400" href="#">
            Sign in <b className="text-2xl">&rarr;</b>
          </a>
        </p>
      </div>

      {/* Bagian header atau judul utama */}
      <Judul />

      {/* Bagian form registrasi */}
      <Register />
    </div>
  );
}

// Komponen untuk menampilkan judul utama
function Judul() {
  return (
    <div className="text-center my-5">
      <h1 className="text-4xl font-bold">Sign up to Awesome</h1>
    </div>
  );
}

// Komponen untuk menampilkan form registrasi
function Register() {
  return (
    <div className="d-flex flex-column align-items-center">
      <form className="w-50" action="#">
        {/* Input untuk email */}
        <div className="mb-3">
          <input
            type="email"
            className="form-control p-3"
            placeholder="Your email..."
          />
        </div>

        {/* Input untuk nama */}
        <div className="mb-3">
          <input
            type="text"
            className="form-control p-3"
            placeholder="Your name..."
          />
        </div>

        {/* Login menggunakan sosial media */}
        <SocialRegister />

        {/* Tombol submit */}
        <ButtonRegister />
      </form>
    </div>
  );
}

// Komponen untuk menampilkan opsi login dengan sosial media
function SocialRegister() {
  return (
    <div className="mt-4 text-center">
      <div className="d-flex justify-content-center align-items-center gap-4">
        {/* Login dengan Google */}
        <div className="text-center">
          <img
            className="rounded-circle"
            src="https://pluspng.com/img-png/google-logo-png-open-2000.png"
            alt="Google Logo"
            width="40"
            height="40"
          />
          <a href="https://accounts.google.com/" className="ms-2">
            Sign up with Google
          </a>
        </div>

        {/* Login dengan Facebook */}
        <div className="text-center">
          <img
            className="rounded-circle"
            src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
            alt="Facebook Logo"
            width="40"
            height="40"
          />
          <a href="https://www.facebook.com/" className="ms-2">
            Sign up with Facebook
          </a>
        </div>
      </div>
    </div>
  );
}

// Komponen untuk tombol registrasi
function ButtonRegister() {
  return (
    <div className="text-center mt-4">
      <button className="btn btn-teal text-white px-4 py-2">
        Create Account
      </button>
    </div>
  );
}
// Komponen Tugas_2
function Tugas_2() {
  return (
    <div className="bg-light">
      {/* Kontainer utama */}
      <div className="container-fluid py-5 bg-light">
        <div className="row w-75 mx-auto">
          {/* Kartu informasi perusahaan */}
          <div className="col-4 flex shadow-lg bg-info bg-gradient h-auto text-center px-5 py-5 align-content-center">
            <div className="d-flex justify-content-center mx-auto w-100">
              <img
                src="img/racing.png"
                className="w-50 md:w-75 lg:w-100 img-fluid hover-scale"
                alt="Car cleaning logo"
              />
            </div>
            <h1 className="fs-2 fw-bold fst-italic my-4">CleanMyCar</h1>
            <p className="fs-6 fw-semibold">
              India's first Waterless car cleaning company
            </p>
          </div>

          {/* Form login */}
          <div className="col shadow-lg bg-light bg-gradient w-50 p-5">
            <div className="float-end fs-6 mt-n4">
              <p>Need help?</p>
            </div>
            <div className="d-grid py-5 my-5 px-5 ms-3 me-5">
              <div className="d-grid justify-content-center mt-5">
                <h1 className="fs-3 fw-bold">Log in</h1>
              </div>

              <form className="mt-5 w-100">
                {/* Input email */}
                <div className="mb-4">
                  <div className="mb-2">
                    <label className="fs-5 fw-bold form-label">Email</label>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="bg-light fs-5 rounded border ps-2 py-2 w-75 hover-form"
                      placeholder="email"
                    />
                  </div>
                </div>

                {/* Input password */}
                <div className="mb-4">
                  <div className="mb-2">
                    <label className="fs-5 fw-bold form-label">Password</label>
                  </div>
                  <div>
                    <input
                      type="password"
                      className="bg-light fs-5 rounded border ps-2 py-2 w-75 hover-form"
                      placeholder="password"
                    />
                  </div>
                </div>

                {/* Tombol submit */}
                <div className="d-flex justify-content-center mt-5">
                  <button className="rounded-pill bg-info hover-button px-5 py-3 fs-5 fw-bold">
                    <p className="mx-4 mb-0">Save Changes</p>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Fungsi utama untuk mengatur tampilan
function App() {
  return (
    <div>
      {/* Memuat Tugas_1 */}
      <Tugas_1 />
      <hr />
      {/* Memuat Tugas_2 */}
      <Tugas_2 />
    </div>
  );
}

// Ekspor komponen utama
export default App;
