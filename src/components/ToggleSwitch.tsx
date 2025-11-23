interface ToggleSwitchProps {
  enabled: boolean;
  onToggle: () => void;
}

export function ToggleSwitch({ enabled, onToggle }: ToggleSwitchProps) {
  return (
    <button onClick={onToggle} className="ml-4">
      <div
        className={`flex w-12 h-6 rounded-full transition-colors ${
          enabled ? 'bg-blue-500' : 'bg-gray-300'
        }`}
      >
        <div
          className={`w-5 h-5 bg-black rounded-full m-0.5 transition-transform ${
            enabled ? 'translate-x-6 bg-white' : 'translate-x-0'
          }`}
        />
      </div>
    </button>
  );
}
