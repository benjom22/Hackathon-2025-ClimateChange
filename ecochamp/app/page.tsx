import Button from "@/components/ui/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-forestGreen-700 w-full min-h-screen flex flex-col gap-10 items-center justify-center px-5">
      <svg className='h-12 w-fit' width="212" height="51" viewBox="0 0 212 51" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_6_3836)">
        <path d="M43.755 37.75C55.225 34.76 59.235 22.5 55.475 11.99C48.765 13.13 40.725 19.1 39.225 25.95C38.515 29.18 38.885 32.06 39.345 35.27L34.505 36.49L31.345 33.31C38.695 25.6 39.675 16.32 34.585 6.98996C33.725 5.40996 30.735 1.02996 29.395 0.109962C28.335 -0.610038 26.405 2.20996 25.665 3.15996C18.235 12.73 17.585 24.35 26.345 33.31L22.995 36.55L18.235 35.06C21.615 23.55 12.625 14.01 1.88497 11.85C-0.975028 22.82 2.05497 34.48 13.945 37.76L11.365 45.1L5.42497 47.69L7.40497 50.87C20.265 43.6 37.425 43.62 50.325 50.83L52.235 47.85L46.225 44.68L43.755 37.75ZM29.195 5.10996C33.915 11.94 36.925 21.29 30.625 28.17V15.4H27.075V28.17C21.035 21.68 23.295 10.83 29.195 5.10996ZM15.365 30.65C14.395 30.86 14.765 30.35 14.495 29.94C13.285 28.11 12.495 26.05 11.265 24.24C10.565 24.61 8.23497 25.3 8.31497 26.15L11.825 32.77C5.48497 30.41 3.74497 22.49 4.73497 16.45C10.685 18.95 15.595 23.76 15.375 30.64L15.365 30.65ZM16.075 43.25L17.485 38.97C17.765 38.75 22.735 40.66 24.345 40.17C25.155 39.93 27.795 36.75 28.685 35.98C29.785 36.03 32.225 39.83 33.365 40.17C35.025 40.67 39.825 38.7 40.225 38.97L41.625 43.43C33.315 41.17 24.445 41.69 16.075 43.25ZM42.335 30.65C42.145 23.66 46.945 18.99 52.975 16.46C53.225 18.1 53.295 19.86 53.135 21.59C53.125 21.7 53.115 21.81 53.095 21.92C53.095 21.95 53.095 21.97 53.095 22C53.085 22.11 53.075 22.22 53.055 22.34C53.015 22.65 52.965 22.96 52.915 23.26C52.895 23.37 52.875 23.48 52.845 23.6C52.775 23.97 52.685 24.33 52.585 24.69C52.545 24.83 52.515 24.96 52.475 25.1C52.375 25.45 52.255 25.8 52.125 26.14C52.075 26.29 52.015 26.43 51.955 26.58C51.895 26.73 51.825 26.89 51.755 27.03C51.685 27.18 51.615 27.33 51.545 27.47C51.475 27.62 51.395 27.76 51.315 27.9C51.235 28.04 51.155 28.19 51.075 28.33C50.985 28.47 50.905 28.61 50.815 28.74C50.725 28.87 50.635 29.01 50.535 29.14C50.335 29.42 50.115 29.7 49.885 29.96C49.795 30.06 49.705 30.17 49.605 30.27C49.495 30.39 49.385 30.5 49.265 30.62C48.555 31.3 47.755 31.89 46.835 32.35C46.525 32.51 46.215 32.65 45.875 32.78L49.405 25.91L46.265 24.28C45.305 26.19 44.315 28.11 43.205 29.94C42.935 30.39 43.275 30.84 42.325 30.64L42.335 30.65Z" fill="#4CAF50"/>
        <path d="M72.9851 37.69C72.7851 37.69 72.6251 37.63 72.4951 37.5C72.3651 37.37 72.3051 37.21 72.3051 37.01V19.44C72.3051 19.24 72.3651 19.08 72.4951 18.95C72.6251 18.82 72.7851 18.76 72.9851 18.76H85.2351C85.4351 18.76 85.5951 18.82 85.7251 18.95C85.8551 19.08 85.9151 19.24 85.9151 19.44V21.6C85.9151 21.78 85.8551 21.93 85.7251 22.06C85.5951 22.19 85.4351 22.25 85.2351 22.25H76.4751V26.49H84.6451C84.8451 26.49 85.0051 26.55 85.1351 26.68C85.2651 26.81 85.3251 26.97 85.3251 27.17V29.17C85.3251 29.35 85.2651 29.5 85.1351 29.63C85.0051 29.76 84.8451 29.82 84.6451 29.82H76.4751V34.2H85.4551C85.6551 34.2 85.8151 34.26 85.9451 34.39C86.0751 34.52 86.1351 34.68 86.1351 34.88V37.02C86.1351 37.22 86.0751 37.38 85.9451 37.51C85.8151 37.64 85.6551 37.7 85.4551 37.7H72.9951L72.9851 37.69Z" fill="white"/>
        <path d="M95.205 37.96C93.885 37.96 92.735 37.72 91.735 37.23C90.735 36.74 89.945 36.04 89.365 35.11C88.785 34.18 88.475 33.07 88.415 31.77C88.395 31.48 88.385 31.12 88.385 30.67C88.385 30.22 88.385 29.86 88.415 29.57C88.465 28.25 88.785 27.13 89.345 26.2C89.915 25.27 90.705 24.56 91.715 24.08C92.725 23.6 93.885 23.35 95.205 23.35C96.415 23.35 97.445 23.52 98.285 23.85C99.135 24.18 99.825 24.6 100.365 25.11C100.905 25.61 101.305 26.14 101.565 26.69C101.825 27.24 101.965 27.72 101.985 28.14C102.005 28.32 101.945 28.48 101.805 28.61C101.665 28.74 101.515 28.81 101.335 28.81H98.445C98.265 28.81 98.125 28.76 98.025 28.66C97.925 28.56 97.835 28.42 97.745 28.24C97.495 27.61 97.165 27.16 96.775 26.89C96.375 26.62 95.885 26.48 95.285 26.48C94.475 26.48 93.835 26.74 93.365 27.26C92.895 27.78 92.645 28.59 92.605 29.69C92.585 30.39 92.585 31.03 92.605 31.61C92.655 32.73 92.915 33.54 93.375 34.04C93.835 34.54 94.475 34.8 95.285 34.8C95.915 34.8 96.425 34.66 96.795 34.39C97.175 34.12 97.485 33.67 97.745 33.04C97.815 32.86 97.905 32.72 98.015 32.62C98.125 32.52 98.265 32.47 98.445 32.47H101.335C101.515 32.47 101.675 32.54 101.805 32.67C101.935 32.8 101.995 32.96 101.985 33.14C101.965 33.45 101.885 33.81 101.725 34.22C101.575 34.64 101.325 35.06 100.995 35.49C100.665 35.92 100.235 36.32 99.715 36.69C99.195 37.06 98.555 37.36 97.805 37.58C97.055 37.81 96.185 37.92 95.195 37.92L95.205 37.96Z" fill="white"/>
        <path d="M111.075 37.96C109.575 37.96 108.325 37.71 107.315 37.22C106.305 36.72 105.535 36.02 105.005 35.1C104.475 34.18 104.185 33.11 104.125 31.88C104.105 31.52 104.095 31.11 104.095 30.65C104.095 30.19 104.095 29.79 104.125 29.45C104.175 28.21 104.485 27.13 105.045 26.22C105.605 25.31 106.385 24.61 107.395 24.11C108.405 23.61 109.635 23.37 111.075 23.37C112.515 23.37 113.715 23.62 114.725 24.11C115.735 24.61 116.515 25.31 117.075 26.22C117.635 27.13 117.945 28.21 117.995 29.45C118.035 29.79 118.045 30.19 118.045 30.65C118.045 31.11 118.025 31.52 117.995 31.88C117.945 33.11 117.645 34.18 117.115 35.1C116.585 36.02 115.815 36.73 114.805 37.22C113.795 37.71 112.555 37.96 111.075 37.96ZM111.075 34.98C111.955 34.98 112.625 34.71 113.075 34.16C113.525 33.61 113.765 32.8 113.805 31.74C113.825 31.47 113.835 31.11 113.835 30.66C113.835 30.21 113.835 29.85 113.805 29.58C113.765 28.54 113.525 27.73 113.075 27.17C112.625 26.61 111.955 26.33 111.075 26.33C110.195 26.33 109.525 26.61 109.065 27.17C108.605 27.73 108.355 28.53 108.325 29.58C108.305 29.85 108.295 30.21 108.295 30.66C108.295 31.11 108.295 31.47 108.325 31.74C108.365 32.8 108.605 33.61 109.065 34.16C109.525 34.71 110.195 34.98 111.075 34.98Z" fill="white"/>
        <path d="M128.705 37.96C127.015 37.96 125.575 37.68 124.395 37.11C123.215 36.54 122.295 35.71 121.655 34.62C121.005 33.53 120.645 32.2 120.575 30.63C120.555 29.89 120.545 29.1 120.545 28.25C120.545 27.4 120.545 26.59 120.575 25.82C120.645 24.27 121.015 22.95 121.675 21.86C122.335 20.77 123.255 19.94 124.445 19.36C125.635 18.78 127.055 18.49 128.715 18.49C129.925 18.49 131.025 18.64 132.015 18.95C133.005 19.26 133.865 19.7 134.585 20.28C135.305 20.86 135.865 21.53 136.265 22.31C136.665 23.08 136.875 23.95 136.915 24.91C136.915 25.07 136.855 25.21 136.735 25.32C136.615 25.43 136.475 25.48 136.315 25.48H133.235C133.015 25.48 132.845 25.43 132.725 25.32C132.605 25.21 132.495 25.03 132.425 24.78C132.155 23.72 131.705 22.99 131.075 22.59C130.445 22.19 129.655 22 128.725 22C127.605 22 126.725 22.31 126.075 22.92C125.425 23.53 125.075 24.55 125.025 25.97C124.975 27.45 124.975 28.96 125.025 30.51C125.075 31.93 125.435 32.95 126.075 33.56C126.725 34.17 127.605 34.48 128.725 34.48C129.665 34.48 130.455 34.28 131.095 33.87C131.735 33.46 132.185 32.74 132.435 31.69C132.505 31.42 132.605 31.24 132.735 31.14C132.865 31.04 133.035 30.99 133.245 30.99H136.325C136.485 30.99 136.625 31.04 136.745 31.15C136.865 31.26 136.925 31.39 136.925 31.56C136.885 32.52 136.675 33.38 136.275 34.16C135.875 34.94 135.315 35.61 134.595 36.19C133.875 36.77 133.015 37.21 132.025 37.51C131.035 37.82 129.935 37.97 128.725 37.97L128.705 37.96Z" fill="white"/>
        <path d="M140.305 37.69C140.105 37.69 139.945 37.63 139.815 37.5C139.685 37.37 139.625 37.21 139.625 37.01V19.17C139.625 18.97 139.685 18.81 139.815 18.68C139.945 18.55 140.105 18.49 140.305 18.49H143.225C143.405 18.49 143.555 18.55 143.685 18.68C143.815 18.81 143.875 18.97 143.875 19.17V25.25C144.365 24.67 144.955 24.21 145.655 23.87C146.355 23.53 147.205 23.36 148.195 23.36C149.255 23.36 150.195 23.6 151.025 24.08C151.845 24.56 152.485 25.25 152.955 26.16C153.425 27.07 153.655 28.17 153.655 29.47V37.01C153.655 37.21 153.595 37.37 153.465 37.5C153.335 37.63 153.175 37.69 152.975 37.69H150.025C149.845 37.69 149.695 37.63 149.565 37.5C149.435 37.37 149.375 37.21 149.375 37.01V29.63C149.375 28.67 149.145 27.93 148.675 27.4C148.205 26.87 147.535 26.6 146.675 26.6C145.815 26.6 145.145 26.87 144.635 27.4C144.125 27.93 143.865 28.68 143.865 29.63V37.01C143.865 37.21 143.805 37.37 143.675 37.5C143.545 37.63 143.395 37.69 143.215 37.69H140.295H140.305Z" fill="white"/>
        <path d="M161.045 37.96C160.085 37.96 159.235 37.77 158.475 37.41C157.715 37.05 157.115 36.54 156.665 35.91C156.215 35.28 155.985 34.58 155.985 33.8C155.985 32.52 156.505 31.51 157.535 30.77C158.575 30.03 159.935 29.53 161.635 29.26L165.175 28.75V28.26C165.175 27.56 165.015 27.02 164.685 26.64C164.365 26.26 163.795 26.07 162.985 26.07C162.395 26.07 161.915 26.19 161.555 26.42C161.195 26.65 160.915 26.96 160.715 27.34C160.575 27.57 160.365 27.69 160.095 27.69H157.525C157.325 27.69 157.175 27.63 157.065 27.51C156.955 27.39 156.915 27.25 156.925 27.09C156.925 26.78 157.045 26.42 157.275 26.01C157.505 25.6 157.865 25.19 158.355 24.78C158.845 24.37 159.465 24.04 160.225 23.77C160.985 23.5 161.915 23.36 163.005 23.36C164.095 23.36 165.115 23.5 165.925 23.77C166.735 24.04 167.385 24.42 167.875 24.91C168.365 25.4 168.725 25.96 168.955 26.6C169.185 27.24 169.305 27.93 169.305 28.67V37.02C169.305 37.22 169.245 37.38 169.115 37.51C168.985 37.64 168.825 37.7 168.625 37.7H165.975C165.795 37.7 165.645 37.64 165.515 37.51C165.385 37.38 165.325 37.22 165.325 37.02V36.02C165.095 36.36 164.775 36.68 164.375 36.98C163.975 37.28 163.505 37.52 162.955 37.7C162.405 37.88 161.765 37.97 161.025 37.97L161.045 37.96ZM162.125 35.14C162.715 35.14 163.255 35.01 163.715 34.76C164.185 34.51 164.555 34.12 164.825 33.6C165.095 33.08 165.235 32.42 165.235 31.63V31.17L162.725 31.58C161.755 31.74 161.035 31.99 160.585 32.31C160.135 32.63 159.905 33.03 159.905 33.5C159.905 33.84 160.005 34.14 160.215 34.39C160.425 34.64 160.695 34.83 161.035 34.96C161.375 35.09 161.735 35.15 162.115 35.15L162.125 35.14Z" fill="white"/>
        <path d="M173.235 37.6899C173.055 37.6899 172.905 37.6299 172.775 37.4999C172.645 37.3699 172.585 37.2099 172.585 37.0099V24.2999C172.585 24.0999 172.645 23.9399 172.775 23.8099C172.905 23.6799 173.055 23.6199 173.235 23.6199H175.745C175.925 23.6199 176.085 23.6799 176.215 23.8099C176.345 23.9399 176.415 24.0999 176.415 24.2999V25.2199C176.775 24.7199 177.275 24.2799 177.915 23.9199C178.555 23.5599 179.315 23.3699 180.195 23.3499C182.285 23.3099 183.715 24.1099 184.495 25.7299C184.905 25.0299 185.505 24.4499 186.295 24.0099C187.085 23.5699 187.935 23.3499 188.875 23.3499C189.815 23.3499 190.655 23.5599 191.415 23.9899C192.175 24.4099 192.775 25.0599 193.215 25.9399C193.655 26.8099 193.875 27.9399 193.875 29.3099V37.0199C193.875 37.2199 193.815 37.3799 193.685 37.5099C193.555 37.6399 193.405 37.6999 193.225 37.6999H190.545C190.365 37.6999 190.215 37.6399 190.085 37.5099C189.955 37.3799 189.895 37.2199 189.895 37.0199V29.5299C189.895 28.7899 189.785 28.2099 189.575 27.7899C189.355 27.3699 189.075 27.0599 188.725 26.8799C188.375 26.6999 187.985 26.6099 187.545 26.6099C187.165 26.6099 186.805 26.6999 186.445 26.8799C186.095 27.0599 185.805 27.3599 185.585 27.7899C185.355 28.2099 185.245 28.7999 185.245 29.5299V37.0199C185.245 37.2199 185.185 37.3799 185.055 37.5099C184.925 37.6399 184.765 37.6999 184.565 37.6999H181.915C181.715 37.6999 181.555 37.6399 181.425 37.5099C181.295 37.3799 181.235 37.2199 181.235 37.0199V29.5299C181.235 28.7899 181.125 28.2099 180.915 27.7899C180.695 27.3699 180.415 27.0599 180.065 26.8799C179.715 26.6999 179.335 26.6099 178.915 26.6099C178.535 26.6099 178.165 26.7099 177.805 26.8899C177.445 27.0799 177.155 27.3799 176.925 27.7999C176.695 28.2099 176.585 28.7799 176.585 29.4999V37.0199C176.585 37.2199 176.525 37.3799 176.395 37.5099C176.265 37.6399 176.115 37.6999 175.935 37.6999H173.205L173.235 37.6899Z" fill="white"/>
        <path d="M197.835 42.82C197.635 42.82 197.475 42.76 197.345 42.63C197.215 42.5 197.155 42.34 197.155 42.14V24.3C197.155 24.1 197.215 23.94 197.345 23.81C197.475 23.68 197.635 23.62 197.835 23.62H200.405C200.605 23.62 200.765 23.68 200.895 23.81C201.025 23.94 201.085 24.1 201.085 24.3V25.33C201.515 24.75 202.075 24.28 202.765 23.91C203.455 23.54 204.305 23.36 205.335 23.36C206.275 23.36 207.085 23.51 207.785 23.81C208.485 24.11 209.065 24.53 209.545 25.08C210.025 25.63 210.395 26.29 210.655 27.07C210.915 27.85 211.065 28.72 211.105 29.69C211.125 30.03 211.135 30.36 211.135 30.66C211.135 30.96 211.135 31.3 211.105 31.66C211.085 32.58 210.945 33.43 210.685 34.2C210.425 34.98 210.045 35.64 209.565 36.2C209.075 36.76 208.485 37.19 207.795 37.5C207.105 37.81 206.285 37.96 205.345 37.96C204.405 37.96 203.625 37.79 202.955 37.46C202.285 37.13 201.725 36.67 201.295 36.09V42.15C201.295 42.35 201.235 42.51 201.105 42.64C200.975 42.77 200.825 42.83 200.645 42.83H197.865L197.835 42.82ZM204.115 34.71C204.805 34.71 205.345 34.56 205.735 34.26C206.135 33.96 206.415 33.57 206.585 33.08C206.755 32.59 206.855 32.06 206.895 31.48C206.935 30.92 206.935 30.36 206.895 29.8C206.855 29.22 206.755 28.69 206.585 28.2C206.415 27.71 206.125 27.32 205.735 27.02C205.335 26.72 204.795 26.57 204.115 26.57C203.435 26.57 202.905 26.72 202.495 27.03C202.075 27.34 201.785 27.72 201.605 28.19C201.425 28.66 201.315 29.16 201.285 29.7C201.265 30.02 201.255 30.36 201.255 30.7C201.255 31.04 201.255 31.39 201.285 31.73C201.305 32.23 201.415 32.71 201.625 33.15C201.835 33.59 202.135 33.96 202.545 34.25C202.955 34.54 203.475 34.68 204.125 34.68L204.115 34.71Z" fill="white"/>
        </g>
        <defs>
        <clipPath id="clip0_6_3836">
        <rect width="210.23" height="50.88" fill="white" transform="translate(0.88501)"/>
        </clipPath>
        </defs>
      </svg>
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-white text-[32px] sm:text-[42px] md:text-[48px] font-bold text-center">Welcome to EcoChamp</h1>
        <p className="text-forestGreen-200 max-w-[400px] text-center">Join us in making a real impact. Every small action counts toward a greener world. <br></br><br></br> <span className="text-white">Ready to be the change?</span></p>
      </div>
      <Button>
          <Link href="/auth/register">Open App</Link>
      </Button>
    </div>
  );
}