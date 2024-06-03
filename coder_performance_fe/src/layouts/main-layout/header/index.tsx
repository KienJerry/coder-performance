import { ImageNextJS } from "@/components/global/Image";
import Link from "next/link";
import { routerPage } from "@/constants/configMatcher.constants";
export const Header = () => {
  return (
    <header className="app-container header">
      <div className="container wrapper-header">
        <Link href={`${routerPage.routerApp[0]}`}>
          <ImageNextJS
            width={105}
            height={45}
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
        <Link href={`${routerPage.routerNotAuth[0]}`}>Đăng Nhập</Link>
      </div>
    </header>
  );
};
