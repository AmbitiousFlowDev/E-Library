import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
      <aside>
        <p className={'font-bold font-[poppins]'}>
          Copyright © {new Date().getFullYear()} - All right reserved by MOHAMED LAFROUH & REDA GENOUTRE
        </p>
      </aside>
    </footer>
  );
}
