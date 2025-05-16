import { clearAllTodos } from "@/app/hooks/TaskManager";

export const HiddenClearButton = () => {
  const handleClick = async () => {
    try {
      await clearAllTodos();
      console.log('All todos cleared');
    } catch (e) {
      console.error('Error clearing todos', e);
    }
  };

  if (process.env.NODE_ENV === 'production') return null;

  return (
    <button
      id="clear-all"
      onClick={handleClick}
      style={{
        width: '1px',
        height: '1px',
        opacity: 0,
        position: 'fixed',
        bottom: 0,
        right: 0,
        zIndex: 9999,
        backgroundColor: 'transparent',
        border: 'none',
        padding: 0,
        margin: 0,
        overflow: 'hidden',
      }}
    >
      clear
    </button>
  );
};