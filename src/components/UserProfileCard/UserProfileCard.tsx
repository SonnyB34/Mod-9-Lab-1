
import type { UserProfileCardProps } from "../../types";

export const UserProfileCard: React.FC<UserProfileCardProps> = ({
  user,
  showEmail,
  showRole,
  onEdit,
  children,
}) => {
  return (
    <div>
      <h1>{user.name}</h1>
      {showEmail && <p>{user.email}</p>}
      {showRole && <p>{user.role}</p>}
      <button onClick={() => onEdit?.(user.id)}>Edit</button>
      {children}
    </div>
  )
}