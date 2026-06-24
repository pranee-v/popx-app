import { useLocation } from "react-router-dom";

/**
 * AccountSettings
 * Profile summary screen shown after login/signup.
 * Falls back to demo data ("Marry Doe") if no state was passed,
 * e.g. when this route is opened directly.
 */
export default function AccountSettings() {
  const { state } = useLocation();
  const name = state?.name || "Marry Doe";
  const email = state?.email || "Marry@Gmail.Com";

  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="account-screen">
      <header className="account-screen__header">
        <h1 className="account-screen__title">Account Settings</h1>
      </header>

      <div className="account-screen__body">
        <div className="profile-card">
          <div className="profile-card__avatar-wrap">
            <div className="profile-card__avatar" aria-hidden="true">
              {initials}
            </div>
            <button
              type="button"
              className="profile-card__edit-badge"
              aria-label="Change profile photo"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 8h2.5L8 5.5h8L17.5 8H20a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z"
                  stroke="#fff"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="13.5" r="3.2" stroke="#fff" strokeWidth="1.6" />
              </svg>
            </button>
          </div>

          <div className="profile-card__info">
            <p className="profile-card__name">{name}</p>
            <p className="profile-card__email">{email}</p>
          </div>
        </div>

        <p className="account-screen__bio">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
          Erat, Sed Diam
        </p>

        <hr className="account-screen__divider" />
      </div>
    </div>
  );
}
