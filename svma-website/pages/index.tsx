import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to SVMA</h1>
      <nav>
        <ul>
          <li><Link href="/skincare">Skin Care</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/financing">Financing</Link></li>
          <li><Link href="/store">Store</Link></li>
          <li><Link href="/testimonials">Testimonials</Link></li>
          <li><Link href="/gallery">Gallery</Link></li>
        </ul>
      </nav>
    </div>
  );
}
