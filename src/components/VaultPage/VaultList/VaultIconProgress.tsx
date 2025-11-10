import type { IconType } from 'react-icons';

type IVaultIconProgressProps = {
  icon: IconType;
  backgroundIcon?: IconType;
  progress: number;
};

export default function VaultIconProgress({
  icon: Icon,
  backgroundIcon: BackgroundIcon,
  progress,
}: IVaultIconProgressProps) {
  if (!BackgroundIcon) BackgroundIcon = Icon;

  return (
    <div className='relative size-16'>
      <div
        className='absolute w-full overflow-hidden'
        style={{
          bottom: `${100 - progress}%`,
          height: `${progress}%`,
        }}
      >
        <Icon
          style={{
            color:
              progress >= 100
                ? `hsl(150, 96%, 45%)`
                : `hsl(254, ${
                    progress < 30 ? 30 : progress > 70 ? 70 : progress
                  }%, 58%)`,
          }}
          className={`size-16`}
        />
      </div>

      <BackgroundIcon className='absolute top-0 left-0 size-16 text-black/10' />
    </div>
  );
}
