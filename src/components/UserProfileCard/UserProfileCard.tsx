
import type { UserProfileCardProps } from "../../types";

export const UserProfileCard: React.FC<UserProfileCardProps> = ({
  user,
  showEmail,
  showRole,
  onEdit,
  children,
}) => {
  return (
    <div className="mt-8">
      <h2>{user.name}</h2>
      {showEmail && <p>{user.email}</p>}
      {showRole && <p>{user.role}</p>}
      <button onClick={() => onEdit?.(user.id)} className="bg-blue-500 p-2 w-xs text-white">Edit Profile</button>
      {children}
    </div>
  )
}