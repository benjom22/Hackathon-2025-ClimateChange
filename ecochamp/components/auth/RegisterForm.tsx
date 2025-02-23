"use client";
import { useState } from "react";
import Image from "next/image";
import Input from "../ui/Input";
import Link from "next/link";
import Button from "../ui/Button";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const router = useRouter();
  const [registerStarted, setIsRegisterStarted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsRegisterStarted(true);

    setError(null);
    setMessage(null);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, username, password }),
      });

      const data = await res.json();

      if (res.status === 200) {
        setMessage(data.message);
        //router.push('/dashboard')
        setIsRegisterStarted(false);
      } else {
        setError(data.error || "An unknown error occurred.");
        setIsRegisterStarted(false);
      }
    } catch (err) {
      setError("Failed to register. Please try again later.");
      setIsRegisterStarted(false);
    }
  };

  return (
    <div className="flex items-center p-5 bg-forestGreen-700 gap-10 h-screen">
      <Image
        src="/auth_background.png"
        width={1300}
        height={1900}
        className="max-md:hidden object-cover w-1/2 h-full rounded-xl"
        alt="background-auth"
      />

      <div className="hidden">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit">Register</button>
        </form>

        {error && <div style={{ color: "red" }}>{error}</div>}
        {message && <div style={{ color: "green" }}>{message}</div>}
      </div>

      <div className="w-full md:w-1/2 flex justify-center">
        <div className="max-w-[500px] flex flex-col gap-8 sm:gap-12">
          <svg
            className="h-8 sm:h-12 w-fit md:hidden"
            viewBox="0 0 116 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.6547 20.7744C29.9835 19.129 32.1962 12.3821 30.1215 6.59833C26.4191 7.22568 21.9828 10.5111 21.1551 14.2807C20.7633 16.0582 20.9675 17.6431 21.2213 19.4096L18.5507 20.081L16.8071 18.331C20.8627 14.0881 21.4034 8.98119 18.5949 3.84675C18.1203 2.97726 16.4705 0.566878 15.7311 0.0605891C15.1463 -0.335637 14.0813 1.21625 13.673 1.73905C9.57331 7.00556 9.21466 13.4002 14.0482 18.331L12.1998 20.114L9.57331 19.2941C11.4383 12.96 6.47785 7.70996 0.551767 6.52128C-1.02631 12.5582 0.645568 18.9749 7.20619 20.7799L5.78261 24.8192L2.50506 26.2446L3.59757 27.9946C10.6934 23.9938 20.1619 24.0048 27.2798 27.9725L28.3337 26.3326L25.0175 24.5881L23.6547 20.7744ZM15.6208 2.81216C18.2252 6.57081 19.886 11.7162 16.4098 15.5024V8.4749H14.451V15.5024C11.1183 11.9309 12.3653 5.95996 15.6208 2.81216ZM7.98972 16.8672C7.45449 16.9828 7.65865 16.7021 7.50967 16.4765C6.84202 15.4694 6.40612 14.3357 5.72743 13.3397C5.34119 13.5433 4.05555 13.923 4.09969 14.3908L6.03643 18.0339C2.53816 16.7351 1.57807 12.3766 2.12433 9.05273C5.4074 10.4285 8.11662 13.0755 7.99523 16.8617L7.98972 16.8672ZM8.38148 23.8012L9.15948 21.4458C9.31398 21.3247 12.0563 22.3758 12.9447 22.1062C13.3916 21.9741 14.8483 20.2241 15.3394 19.8004C15.9463 19.8279 17.2927 21.9191 17.9217 22.1062C18.8376 22.3813 21.4862 21.2972 21.7069 21.4458L22.4794 23.9002C17.8941 22.6565 12.9998 22.9427 8.38148 23.8012ZM22.8711 16.8672C22.7663 13.0205 25.4148 10.4505 28.742 9.05823C28.88 9.96075 28.9186 10.9293 28.8303 11.8813C28.8248 11.9419 28.8193 12.0024 28.8082 12.0629C28.8082 12.0795 28.8082 12.0905 28.8082 12.107C28.8027 12.1675 28.7972 12.228 28.7862 12.2941C28.7641 12.4647 28.7365 12.6353 28.7089 12.8004C28.6979 12.8609 28.6869 12.9214 28.6703 12.9875C28.6317 13.1911 28.582 13.3892 28.5268 13.5873C28.5048 13.6644 28.4882 13.7359 28.4661 13.8129C28.411 14.0056 28.3448 14.1982 28.273 14.3853C28.2454 14.4678 28.2123 14.5449 28.1792 14.6274C28.1461 14.71 28.1075 14.798 28.0689 14.8751C28.0302 14.9576 27.9916 15.0401 27.953 15.1172C27.9144 15.1997 27.8702 15.2768 27.8261 15.3538C27.7819 15.4309 27.7378 15.5134 27.6937 15.5905C27.644 15.6675 27.5999 15.7446 27.5502 15.8161C27.5005 15.8876 27.4509 15.9647 27.3957 16.0362C27.2853 16.1903 27.164 16.3444 27.037 16.4875C26.9874 16.5425 26.9377 16.603 26.8825 16.6581C26.8219 16.7241 26.7612 16.7846 26.6949 16.8507C26.3032 17.2249 25.8618 17.5496 25.3541 17.8027C25.1831 17.8908 25.012 17.9678 24.8244 18.0394L26.7722 14.2587L25.0396 13.3617C24.5099 14.4128 23.9636 15.4694 23.3512 16.4765C23.2022 16.7241 23.3898 16.9718 22.8656 16.8617L22.8711 16.8672Z"
              fill="#4CAF50"
            />
            <path
              d="M39.7831 20.7413C39.6728 20.7413 39.5845 20.7083 39.5127 20.6367C39.441 20.5652 39.4079 20.4772 39.4079 20.3671V10.6981C39.4079 10.588 39.441 10.5 39.5127 10.4284C39.5845 10.3569 39.6728 10.3239 39.7831 10.3239H46.5424C46.6527 10.3239 46.741 10.3569 46.8127 10.4284C46.8845 10.5 46.9176 10.588 46.9176 10.6981V11.8867C46.9176 11.9858 46.8845 12.0683 46.8127 12.1399C46.741 12.2114 46.6527 12.2444 46.5424 12.2444H41.7088V14.5778H46.2168C46.3272 14.5778 46.4155 14.6108 46.4872 14.6823C46.5589 14.7539 46.592 14.8419 46.592 14.952V16.0526C46.592 16.1517 46.5589 16.2342 46.4872 16.3058C46.4155 16.3773 46.3272 16.4103 46.2168 16.4103H41.7088V18.8207H46.6638C46.7741 18.8207 46.8624 18.8537 46.9341 18.9253C47.0059 18.9968 47.039 19.0849 47.039 19.1949V20.3726C47.039 20.4827 47.0059 20.5707 46.9341 20.6422C46.8624 20.7138 46.7741 20.7468 46.6638 20.7468H39.7886L39.7831 20.7413Z"
              fill="white"
            />
            <path
              d="M52.0436 20.8899C51.3152 20.8899 50.6807 20.7579 50.1289 20.4882C49.5771 20.2186 49.1412 19.8333 48.8212 19.3216C48.5012 18.8098 48.3301 18.1989 48.297 17.4835C48.286 17.3239 48.2805 17.1258 48.2805 16.8782C48.2805 16.6305 48.2805 16.4324 48.297 16.2728C48.3246 15.5464 48.5012 14.93 48.8102 14.4182C49.1247 13.9065 49.5606 13.5157 50.1179 13.2516C50.6752 12.9874 51.3152 12.8499 52.0436 12.8499C52.7112 12.8499 53.2796 12.9434 53.743 13.125C54.2121 13.3066 54.5928 13.5377 54.8907 13.8184C55.1887 14.0936 55.4094 14.3852 55.5529 14.6879C55.6963 14.9906 55.7736 15.2547 55.7846 15.4859C55.7957 15.5849 55.7625 15.673 55.6853 15.7445C55.608 15.816 55.5253 15.8546 55.426 15.8546H53.8313C53.732 15.8546 53.6548 15.8271 53.5996 15.772C53.5444 15.717 53.4947 15.6399 53.4451 15.5409C53.3071 15.1942 53.1251 14.9466 52.9099 14.798C52.6892 14.6494 52.4188 14.5723 52.0877 14.5723C51.6408 14.5723 51.2876 14.7154 51.0283 15.0016C50.769 15.2877 50.631 15.7335 50.609 16.3388C50.5979 16.7241 50.5979 17.0763 50.609 17.3955C50.6365 18.0118 50.78 18.4576 51.0338 18.7327C51.2876 19.0079 51.6408 19.151 52.0877 19.151C52.4353 19.151 52.7167 19.0739 52.9209 18.9253C53.1306 18.7767 53.3016 18.5291 53.4451 18.1824C53.4837 18.0833 53.5334 18.0063 53.5941 17.9513C53.6548 17.8962 53.732 17.8687 53.8313 17.8687H55.426C55.5253 17.8687 55.6136 17.9072 55.6853 17.9788C55.757 18.0503 55.7901 18.1384 55.7846 18.2374C55.7736 18.408 55.7294 18.6061 55.6412 18.8318C55.5584 19.0629 55.4204 19.294 55.2384 19.5307C55.0563 19.7673 54.819 19.9874 54.5321 20.191C54.2452 20.3947 53.892 20.5598 53.4782 20.6808C53.0644 20.8074 52.5843 20.8679 52.0381 20.8679L52.0436 20.8899Z"
              fill="white"
            />
            <path
              d="M60.8003 20.8899C59.9726 20.8899 59.2829 20.7523 58.7256 20.4827C58.1683 20.2075 57.7434 19.8223 57.451 19.316C57.1585 18.8097 56.9985 18.2209 56.9654 17.544C56.9544 17.3459 56.9489 17.1203 56.9489 16.8671C56.9489 16.614 56.9489 16.3939 56.9654 16.2068C56.993 15.5244 57.164 14.93 57.473 14.4292C57.782 13.9284 58.2124 13.5432 58.7697 13.2681C59.327 12.9929 60.0057 12.8608 60.8003 12.8608C61.5948 12.8608 62.2569 12.9984 62.8142 13.2681C63.3715 13.5432 63.8019 13.9284 64.1109 14.4292C64.4199 14.93 64.591 15.5244 64.6185 16.2068C64.6406 16.3939 64.6461 16.614 64.6461 16.8671C64.6461 17.1203 64.6351 17.3459 64.6185 17.544C64.591 18.2209 64.4254 18.8097 64.133 19.316C63.8405 19.8223 63.4157 20.213 62.8584 20.4827C62.3011 20.7523 61.6169 20.8899 60.8003 20.8899ZM60.8003 19.25C61.2858 19.25 61.6555 19.1014 61.9038 18.7987C62.1521 18.4961 62.2845 18.0503 62.3066 17.467C62.3176 17.3184 62.3232 17.1203 62.3232 16.8726C62.3232 16.625 62.3232 16.4269 62.3066 16.2783C62.2845 15.706 62.1521 15.2602 61.9038 14.952C61.6555 14.6439 61.2858 14.4898 60.8003 14.4898C60.3147 14.4898 59.945 14.6439 59.6912 14.952C59.4374 15.2602 59.2994 15.7005 59.2829 16.2783C59.2718 16.4269 59.2663 16.625 59.2663 16.8726C59.2663 17.1203 59.2663 17.3184 59.2829 17.467C59.3049 18.0503 59.4374 18.4961 59.6912 18.7987C59.945 19.1014 60.3147 19.25 60.8003 19.25Z"
              fill="white"
            />
            <path
              d="M70.5281 20.8899C69.5956 20.8899 68.8011 20.7358 68.15 20.4221C67.4989 20.1085 66.9912 19.6517 66.6381 19.0519C66.2794 18.452 66.0808 17.7201 66.0422 16.8561C66.0312 16.4489 66.0256 16.0141 66.0256 15.5464C66.0256 15.0786 66.0256 14.6328 66.0422 14.2091C66.0808 13.3561 66.285 12.6297 66.6491 12.0299C67.0133 11.43 67.5209 10.9732 68.1776 10.6541C68.8342 10.3349 69.6177 10.1753 70.5336 10.1753C71.2013 10.1753 71.8083 10.2578 72.3545 10.4284C72.9008 10.599 73.3753 10.8412 73.7726 11.1604C74.1699 11.4795 74.4789 11.8482 74.6996 12.2775C74.9203 12.7012 75.0361 13.18 75.0582 13.7083C75.0582 13.7964 75.0251 13.8734 74.9589 13.9339C74.8927 13.9945 74.8154 14.022 74.7271 14.022H73.0277C72.9063 14.022 72.8125 13.9945 72.7463 13.9339C72.6801 13.8734 72.6194 13.7743 72.5807 13.6368C72.4318 13.0534 72.1835 12.6517 71.8358 12.4316C71.4882 12.2115 71.0523 12.1069 70.5392 12.1069C69.9212 12.1069 69.4356 12.2775 69.077 12.6132C68.7183 12.9489 68.5252 13.5102 68.4976 14.2916C68.47 15.1061 68.47 15.9371 68.4976 16.7901C68.5252 17.5715 68.7238 18.1328 69.077 18.4685C69.4356 18.8042 69.9212 18.9748 70.5392 18.9748C71.0578 18.9748 71.4937 18.8648 71.8469 18.6391C72.2 18.4135 72.4483 18.0173 72.5863 17.4394C72.6249 17.2909 72.6801 17.1918 72.7518 17.1368C72.8235 17.0817 72.9173 17.0542 73.0332 17.0542H74.7327C74.821 17.0542 74.8982 17.0817 74.9644 17.1423C75.0306 17.2028 75.0637 17.2743 75.0637 17.3679C75.0417 17.8962 74.9258 18.3695 74.7051 18.7987C74.4844 19.228 74.1754 19.5967 73.7781 19.9159C73.3808 20.235 72.9063 20.4772 72.36 20.6423C71.8138 20.8129 71.2068 20.8954 70.5392 20.8954L70.5281 20.8899Z"
              fill="white"
            />
            <path
              d="M76.9287 20.7413C76.8184 20.7413 76.7301 20.7083 76.6584 20.6368C76.5866 20.5652 76.5535 20.4772 76.5535 20.3671V10.5495C76.5535 10.4394 76.5866 10.3514 76.6584 10.2799C76.7301 10.2083 76.8184 10.1753 76.9287 10.1753H78.5399C78.6392 10.1753 78.722 10.2083 78.7937 10.2799C78.8655 10.3514 78.8986 10.4394 78.8986 10.5495V13.8954C79.1689 13.5762 79.4945 13.3231 79.8807 13.136C80.267 12.9489 80.736 12.8553 81.2822 12.8553C81.8671 12.8553 82.3858 12.9874 82.8438 13.2516C83.2962 13.5157 83.6494 13.8954 83.9087 14.3962C84.168 14.897 84.295 15.5023 84.295 16.2177V20.3671C84.295 20.4772 84.2618 20.5652 84.1901 20.6368C84.1184 20.7083 84.0301 20.7413 83.9197 20.7413H82.292C82.1927 20.7413 82.1099 20.7083 82.0382 20.6368C81.9664 20.5652 81.9334 20.4772 81.9334 20.3671V16.3058C81.9334 15.7775 81.8064 15.3703 81.5471 15.0786C81.2878 14.7869 80.9181 14.6383 80.4435 14.6383C79.969 14.6383 79.5993 14.7869 79.3179 15.0786C79.0365 15.3703 78.8931 15.783 78.8931 16.3058V20.3671C78.8931 20.4772 78.8599 20.5652 78.7882 20.6368C78.7165 20.7083 78.6337 20.7413 78.5344 20.7413H76.9232H76.9287Z"
              fill="white"
            />
            <path
              d="M88.3726 20.8899C87.8428 20.8899 87.3738 20.7854 86.9545 20.5873C86.5351 20.3892 86.2041 20.1085 85.9558 19.7618C85.7075 19.4151 85.5806 19.0299 85.5806 18.6006C85.5806 17.8962 85.8675 17.3404 86.4358 16.9332C87.0097 16.5259 87.7601 16.2508 88.6981 16.1022L90.6514 15.8215V15.5519C90.6514 15.1667 90.5631 14.8695 90.381 14.6604C90.2045 14.4513 89.8899 14.3467 89.443 14.3467C89.1175 14.3467 88.8526 14.4127 88.654 14.5393C88.4553 14.6659 88.3008 14.8365 88.1905 15.0456C88.1132 15.1722 87.9973 15.2382 87.8484 15.2382H86.4303C86.3199 15.2382 86.2372 15.2052 86.1765 15.1392C86.1158 15.0731 86.0937 14.9961 86.0992 14.908C86.0992 14.7374 86.1654 14.5393 86.2924 14.3137C86.4193 14.0881 86.6179 13.8624 86.8883 13.6368C87.1586 13.4112 87.5007 13.2296 87.9201 13.081C88.3394 12.9324 88.8526 12.8553 89.454 12.8553C90.0555 12.8553 90.6183 12.9324 91.0652 13.081C91.5122 13.2296 91.8708 13.4387 92.1412 13.7083C92.4116 13.978 92.6102 14.2862 92.7371 14.6384C92.864 14.9906 92.9302 15.3703 92.9302 15.7775V20.3726C92.9302 20.4827 92.8971 20.5708 92.8254 20.6423C92.7537 20.7138 92.6654 20.7469 92.555 20.7469H91.0928C90.9935 20.7469 90.9107 20.7138 90.839 20.6423C90.7673 20.5708 90.7342 20.4827 90.7342 20.3726V19.8223C90.6072 20.0094 90.4307 20.1855 90.21 20.3506C89.9893 20.5157 89.7299 20.6478 89.4265 20.7469C89.123 20.8459 88.7698 20.8954 88.3615 20.8954L88.3726 20.8899ZM88.9685 19.338C89.294 19.338 89.592 19.2665 89.8458 19.1289C90.1051 18.9914 90.3093 18.7767 90.4583 18.4906C90.6072 18.2044 90.6845 17.8412 90.6845 17.4064V17.1533L89.2995 17.3789C88.7643 17.467 88.367 17.6046 88.1187 17.7807C87.8704 17.9568 87.7435 18.1769 87.7435 18.4355C87.7435 18.6226 87.7987 18.7877 87.9146 18.9253C88.0305 19.0629 88.1794 19.1675 88.367 19.239C88.5546 19.3105 88.7533 19.3436 88.963 19.3436L88.9685 19.338Z"
              fill="white"
            />
            <path
              d="M95.0987 20.7413C94.9994 20.7413 94.9166 20.7083 94.8449 20.6367C94.7732 20.5652 94.7401 20.4771 94.7401 20.3671V13.3726C94.7401 13.2625 94.7732 13.1745 94.8449 13.1029C94.9166 13.0314 94.9994 12.9984 95.0987 12.9984H96.4837C96.583 12.9984 96.6713 13.0314 96.743 13.1029C96.8147 13.1745 96.8534 13.2625 96.8534 13.3726V13.8789C97.052 13.6037 97.3279 13.3616 97.681 13.1635C98.0342 12.9654 98.4535 12.8608 98.9391 12.8498C100.092 12.8278 100.881 13.268 101.312 14.1595C101.538 13.7743 101.869 13.4551 102.305 13.213C102.741 12.9709 103.21 12.8498 103.728 12.8498C104.247 12.8498 104.711 12.9654 105.13 13.202C105.549 13.4331 105.88 13.7908 106.123 14.2751C106.366 14.7539 106.487 15.3757 106.487 16.1297V20.3726C106.487 20.4826 106.454 20.5707 106.383 20.6422C106.311 20.7138 106.228 20.7468 106.129 20.7468H104.65C104.551 20.7468 104.468 20.7138 104.396 20.6422C104.324 20.5707 104.291 20.4826 104.291 20.3726V16.2507C104.291 15.8435 104.231 15.5243 104.115 15.2932C103.993 15.0621 103.839 14.8915 103.646 14.7924C103.453 14.6933 103.237 14.6438 102.995 14.6438C102.785 14.6438 102.586 14.6933 102.388 14.7924C102.195 14.8915 102.035 15.0565 101.913 15.2932C101.786 15.5243 101.726 15.849 101.726 16.2507V20.3726C101.726 20.4826 101.692 20.5707 101.621 20.6422C101.549 20.7138 101.461 20.7468 101.35 20.7468H99.8881C99.7778 20.7468 99.6895 20.7138 99.6178 20.6422C99.546 20.5707 99.5129 20.4826 99.5129 20.3726V16.2507C99.5129 15.8435 99.4522 15.5243 99.3364 15.2932C99.215 15.0621 99.0605 14.8915 98.8673 14.7924C98.6742 14.6933 98.4645 14.6438 98.2328 14.6438C98.0231 14.6438 97.819 14.6988 97.6203 14.7979C97.4217 14.9025 97.2617 15.0676 97.1348 15.2987C97.0079 15.5243 96.9472 15.838 96.9472 16.2342V20.3726C96.9472 20.4826 96.914 20.5707 96.8423 20.6422C96.7706 20.7138 96.6878 20.7468 96.5885 20.7468H95.0822L95.0987 20.7413Z"
              fill="white"
            />
            <path
              d="M108.672 23.5645C108.562 23.5645 108.474 23.5314 108.402 23.4599C108.33 23.3884 108.297 23.3003 108.297 23.1903V13.3726C108.297 13.2626 108.33 13.1745 108.402 13.103C108.474 13.0314 108.562 12.9984 108.672 12.9984H110.091C110.201 12.9984 110.289 13.0314 110.361 13.103C110.433 13.1745 110.466 13.2626 110.466 13.3726V13.9395C110.703 13.6203 111.012 13.3616 111.393 13.158C111.773 12.9544 112.242 12.8553 112.811 12.8553C113.329 12.8553 113.776 12.9379 114.163 13.103C114.549 13.2681 114.869 13.4992 115.134 13.8019C115.399 14.1046 115.603 14.4678 115.746 14.897C115.89 15.3263 115.972 15.805 115.995 16.3388C116.006 16.5259 116.011 16.7075 116.011 16.8726C116.011 17.0377 116.011 17.2248 115.995 17.423C115.983 17.9292 115.906 18.397 115.763 18.8208C115.619 19.25 115.41 19.6132 115.145 19.9214C114.874 20.2296 114.549 20.4662 114.168 20.6368C113.787 20.8074 113.335 20.8899 112.816 20.8899C112.298 20.8899 111.867 20.7964 111.498 20.6148C111.128 20.4332 110.819 20.18 110.582 19.8608V23.1958C110.582 23.3058 110.548 23.3939 110.477 23.4654C110.405 23.537 110.322 23.57 110.223 23.57H108.689L108.672 23.5645ZM112.138 19.1014C112.518 19.1014 112.816 19.0189 113.031 18.8538C113.252 18.6887 113.407 18.4741 113.5 18.2044C113.594 17.9348 113.649 17.6431 113.672 17.3239C113.694 17.0157 113.694 16.7075 113.672 16.3994C113.649 16.0802 113.594 15.7885 113.5 15.5189C113.407 15.2492 113.247 15.0346 113.031 14.8695C112.811 14.7044 112.513 14.6219 112.138 14.6219C111.762 14.6219 111.47 14.7044 111.244 14.875C111.012 15.0456 110.852 15.2547 110.753 15.5134C110.653 15.772 110.593 16.0472 110.576 16.3443C110.565 16.5204 110.56 16.7075 110.56 16.8947C110.56 17.0818 110.56 17.2744 110.576 17.4615C110.587 17.7366 110.648 18.0008 110.764 18.2429C110.88 18.4851 111.045 18.6887 111.271 18.8483C111.498 19.0079 111.784 19.0849 112.143 19.0849L112.138 19.1014Z"
              fill="white"
            />
          </svg>
          <div className="flex flex-col gap-1">
            <h1 className="text-white font-bold text-[2.25rem] lg:text-[3rem] leading-[120%]">
              Create an account
            </h1>
            <p className="text-forestGreen-100">
              Already have an account?{" "}
              <Link
                href="/auth/login"
                className="font-medium text-white underline"
              >
                Log in
              </Link>
            </p>
          </div>
          <form
            className="flex flex-col gap-8 sm:gap-12"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-wrap gap-5 w-full">
              <Input
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                placeholder="email@example.com"
                required
              />
              <Input
                label="Username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                id="username"
                required
              />
              <Input
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                required
              />
            </div>
            <div className="flex flex-col items-center gap-2">
              <Button
                className={`w-full ${registerStarted ? "disabled" : ""}`}
                submitButton
              >
                {registerStarted ? (
                  <span className="flex items-center justify-center gap-2">
                    Processing
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-earthGreen-300 animate-spin fill-white"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                  </span>
                ) : (
                  <span>Create an account</span>
                )}
              </Button>
              {error && <div style={{ color: "#F77E6E" }}>{error}</div>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
