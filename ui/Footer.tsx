import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <footer className="footer">

        <span className="logo">
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            width={72}
            height={16}
          />
        </span>

        <small className="d-block mt-2">
          Copyright &copy; 2023 SOFTW∆REDEV
        </small>

      </footer>
    </>
  );
}
