/**
 * MobileFrame
 * Wraps every screen so the mobile app interface is centered
 * on the webpage, matching the assignment requirement.
 */
export default function MobileFrame({ children }) {
  return (
    <div className="page-shell">
      <div className="mobile-frame">{children}</div>
    </div>
  );
}
