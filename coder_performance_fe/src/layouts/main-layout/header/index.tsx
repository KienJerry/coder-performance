import { ImageNextJS } from "@/components/global/Image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="app-container">
      <div className="container wrapper-header">
        <Link href={"/"}>
          <ImageNextJS
            className="img-logo"
            src={"https://zozo.vn/public/theme/touched/images/logo/logo.png"}
            alt="Coder Performance"
          />
        </Link>
        <nav>
          <ul>
            <li>
              <a href="/">Trang chủ</a>
            </li>
            <li>
              <a href="/gioi-thieu">Giới thiệu</a>
            </li>
            <li>
              <a href="/dich-vu">Dịch vụ</a>
            </li>
            <li>
              <a href="/lien-he">Liên hệ</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
