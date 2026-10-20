
import type { UserProfileCardProps } from "../../types";

export const UserProfileCard: React.FC<UserProfileCardProps> = ({
  user,
  showEmail,
  showRole,
  onEdit,
  children,
}) => {
  return (
    <div className="flex justify-center items-center">
    <div className="mt-2">
      <h2 className="text-center text-xl font-medium">{user.name}</h2>
      {showEmail && <p className="text-center">{user.email}</p>}
      {showRole && <p className="text-center">{user.role}</p>}
      <button onClick={() => onEdit?.(user.id)} className="bg-blue-500 p-2 w-xs text-white">Edit Profile</button>
      <span className="text-center">{children}</span>
    </div>
    </div>
  )
}