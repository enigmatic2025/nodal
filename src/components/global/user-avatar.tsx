import Image from "next/image";

export function UserAvatar({ user }: { user: { name: string, image?: string } }) {
  const getInitials = (name: string) => {
    const names = name.trim().split(" ");
    return names.length === 1
      ? names[0][0]
      : `${names[0][0]}${names[names.length - 1][0]}`;
  };

  return (
    <div className="flex justify-center items-center h-10 aspect-square rounded-full border-2 border-black/20 text-xs font-bold text-black">
      {user.image ? (
        <Image
          src={user.image}
          alt={user.name}
          height={40}
          width={40}
          className="rounded-full"
        />
      ) : (
        <span>{getInitials(user.name)}</span>
      )}
    </div>
  );
}