"use client";
import { ImageNextJS } from "@/components/global/Image";
import Link from "next/link";
import { routerPage } from "@/constants/configMatcher.constants";
import * as Constants from "@/constants";
import useWindowSize from "@/helper/screens/detectScreen.constants";

export const Header = () => {
  const { isML } = useWindowSize();
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
        {!isML ? (
          <nav>
            <ul>
              {dataMenu?.map((val) => {
                return (
                  <li key={val.slug}>
                    <a href={`${val?.slug}`}>{val?.name}</a>
                    <div style={{ width: "10px" }}>
                      {Constants.ICON_CONSTANTS.ICON_KEY.down}
                    </div>
                  </li>
                );
              })}
            </ul>
          </nav>
        ) : (
          <div>111</div>
        )}
        <Link className="txt-login" href={`${routerPage.routerNotAuth[0]}`}>
          Đăng Nhập
        </Link>
      </div>
    </header>
  );
};
const dataMenu = [
  {
    slug: "website",
    name: "Website",
    children: [
      {
        slug: "thiet-ke-website-ban-hang",
        name: "Thiết kế website bán hàng",
        menu_children: [
          {
            slug: "home/feature",
            name: "Tính năng",
          },
          {
            slug: "bang-gia",
            name: "Tính năng",
          },
          {
            slug: "tao-dung-thu/website",
            name: "Dùng thử",
          },
          {
            slug: "kho-giao-dien",
            name: "Kho giao diện",
          },
          {
            slug: "kho-ung-dung",
            name: "Kho ứng dụng",
          },
        ],
      },
      {
        slug: "thiet-ke-website-theo-yeu-cau",
        name: "Thiết kế website theo yêu cầu",
      },
      {
        slug: "ung-dung-zozo-mobile",
        name: "Ứng dụng Zozo Mobile",
      },
      {
        slug: "dang-ky-ten-mien",
        name: "Đăng ký tên miền",
      },
      {
        slug: "thong-bao-website-voi-bo-cong-thuong",
        name: "Thông báo website với BCT",
      },
    ],
  },
  {
    slug: "email",
    name: "Email",
    children: [
      {
        slug: "ung-dung-email-marketing",
        name: "Email Marketing",
        menu_children: [
          {
            slug: "bang-gia-email-marketing",
            name: "Bảng giá",
          },
          {
            slug: "tai-lieu-huong-dan/cac-buoc-co-ban-de-gui-chien-dich-email-marketing",
            name: "Hướng dẫn",
          },
          {
            slug: "merchant/confirmemail/ema",
            name: "Dùng thử",
          },
          {
            slug: "https://www.facebook.com/groups/ema.zozo.vn",
            name: "Cộng đồng Email marketing",
          },
        ],
      },
      {
        slug: "dich-vu-email-api",
        name: "Email API & SMTP",
        menu_children: [
          {
            slug: "dich-vu-email-api",
            name: "Tính năng",
          },
          {
            slug: "bang-gia-email-marketing",
            name: "Bảng giá",
          },
          {
            slug: "emailapi",
            name: "Dùng thử",
          },
          {
            slug: "login",
            name: "Tài liệu mô tả kết nối API",
          },
        ],
      },
    ],
  },
  {
    slug: "doanh-nghiep",
    name: "Doanh nghiệp",
    children: [
      {
        slug: "hop-dong-dien-tu",
        name: "Hợp đồng điện tử",
        menu_children: [
          {
            slug: "hop-dong-dien-tu",
            name: "Giới thiệu",
          },
          {
            slug: "bang-gia",
            name: "Bảng giá",
          },
          {
            slug: "econtract",
            name: "Dùng thử",
          },
          {
            slug: "Tài liệu hướng dẫn",
            name: "tai-lieu-huong-dan",
          },
          {
            slug: "khach-hang",
            name: "Khách hàng",
          },
        ],
      },
      {
        slug: "hoa-don-dien-tu",
        name: "Hóa đơn điện tử",
        menu_children: [
          {
            slug: "hoa-don-dien-tu",
            name: "Giới thiệu",
          },
          {
            slug: "tinh-nang",
            name: "Tính năng",
          },
          {
            slug: "dung-thu",
            name: "Dùng thử",
          },
          {
            slug: "bang-gia",
            name: "Bảng giá",
          },
          {
            slug: "lien-he",
            name: "Liên hệ",
          },
        ],
      },
      {
        slug: "chu-ky-so",
        name: "Chữ ký số",
        menu_children: [
          {
            slug: "hoa-don-dien-tu",
            name: "Giới thiệu",
          },
          {
            slug: "tinh-nang",
            name: "Tính năng",
          },
          {
            slug: "dung-thu",
            name: "Dùng thử",
          },
          {
            slug: "bang-gia",
            name: "Bảng giá",
          },
          {
            slug: "lien-he",
            name: "Liên hệ",
          },
        ],
      },
    ],
  },
  {
    slug: "bang-gia-dich-vu",
    name: "Bảng giá dịch vụ",
  },
  {
    slug: "khach-hang",
    name: "Khách hàng",
  },
  {
    slug: "them",
    name: "Thêm",
    children: [
      {
        slug: "blog",
        name: "Blog",
      },
      {
        slug: "ho-tro",
        name: "Trung tâm hỗ trợ",
      },
      {
        slug: "doi-tac",
        name: "Chương trình Đối tác",
      },
      {
        slug: "cong-tac",
        name: "Cộng tác viên bán hàng",
      },
      {
        slug: "lien-he",
        name: "Liên hệ",
      },
    ],
  },
  {
    slug: "blog/khuyen-mai",
    name: "Khuyến mãi",
  },
];
