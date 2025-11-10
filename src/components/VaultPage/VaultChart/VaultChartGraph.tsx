'use client';

import type { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
import { useMemo } from 'react';
import type { VaultChartTypes } from '@/layout/Vault/VaultChart';
import { useThemeStore } from '@/stores/useThemeStore';
import { useVaultStore } from '@/stores/useVaultStore';
import { getPercentage } from '@/utils/getPercentage';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface IVaultChartGraphProps {
  typeOfChart: VaultChartTypes;
}

function VaultChartGraph({ typeOfChart }: IVaultChartGraphProps) {
  const vaultList = useVaultStore((s) => s.vaultData.list);
  const vaultItemList = useVaultStore((s) => s.vaultItemData.list);
  const getTotalMoneySavedFromVault = useVaultStore(
    (s) => s.getTotalMoneySavedFromVault,
  );
  const theme = useThemeStore((s) => s.theme);

  const totalInVaults: number = vaultList
    .map((vault) => getTotalMoneySavedFromVault(vault.id))
    .reduce((acc, item) => acc + item, 0);

  const totalProgress = [
    ...vaultList.map((vault) => {
      const value = getPercentage(
        getTotalMoneySavedFromVault(vault.id),
        totalInVaults,
      );
      return +value > 100 ? 100 : value;
    }),
  ];

  // biome-ignore lint/correctness/useExhaustiveDependencies: <Necessary for sync>
  const vaultProgress = useMemo(
    () => [
      ...vaultList.map((vault) => {
        const value = getPercentage(
          getTotalMoneySavedFromVault(vault.id),
          vault.targetPrice,
        );
        return +value > 100 ? 100 : +value * 0.75;
      }),
    ],

    [vaultList, getTotalMoneySavedFromVault, vaultItemList],
  );

  const rest = vaultList
    .map((vault) => vault.targetPrice - getTotalMoneySavedFromVault(vault.id))
    .reduce((acc, item) => acc + item, 0);

  const restProgress = [
    rest,
    ...vaultList.map((vault) => getTotalMoneySavedFromVault(vault.id)),
  ];

  const options: ApexOptions = {
    labels:
      typeOfChart === 'restProgress'
        ? ['Restante', ...vaultList.map((vault) => vault.name)]
        : vaultList.map((vault) => vault.name),
    legend: {
      position: 'bottom',
      labels: {
        colors: theme === 'light' ? '#2a1e57' : '#f5f5fd',
      },
    },
    stroke: {
      colors: theme === 'light' ? ['#f6f6f6'] : ['#453181'],
      width: 4,
    },
    fill: {
      opacity: 1,
      colors:
        typeOfChart === 'restProgress'
          ? ['#a9a9a9', '#df4444', '#4477df', '#44df44', '#df7744']
          : ['#df4444', '#4477df', '#44df44', '#df7744'],
    },
    plotOptions: {
      radialBar: {
        barLabels: {
          enabled: true,
          useSeriesColors: true,
          offsetX: -8,
          fontSize: '16px',
        },
        track: {
          background: theme === 'light' ? '#f6f6f6' : '#453181',
        },
        dataLabels: {
          value: {
            fontSize: '16px',
            color: theme === 'light' ? '#2a1e57' : '#f5f5fd',
            formatter: (val: number) => {
              const originalVal = val / 0.75;
              return `${
                Number.isNaN(originalVal) ? 0 : originalVal.toFixed(0)
              }%`;
            },
          },
        },
      },
      pie: {
        offsetY: 20,
        startAngle: -90,
        endAngle: 90,
        donut: {
          labels: {
            show: true,
            name: {
              show: true,
              color: theme === 'light' ? '#2a1e57' : '#ffffff', // aqui você muda a cor!
              fontSize: '16px',
            },
            value: {
              formatter: (val: string) =>
                typeOfChart === 'restProgress' ? '' : `${val}% / 100%`,
              color: theme === 'light' ? '#2a1e57' : '#f5f5fd',
            },
          },
          size: '60',
        },
        expandOnClick: false,
      },
    },
  };
  const series =
    typeOfChart === 'totalProgress'
      ? totalProgress.map((val) => +val)
      : typeOfChart === 'vaultProgress'
        ? vaultProgress.map((val) => +val)
        : restProgress.map((val) => +val);

  return (
    <>
      {typeof window !== 'undefined' && window && (
        <Chart
          options={options}
          series={series}
          type={typeOfChart === 'vaultProgress' ? 'radialBar' : 'donut'}
          height={'90%'}
          width={'98%'}
        />
      )}
    </>
  );
}

export default dynamic(() => Promise.resolve(VaultChartGraph), {
  ssr: false,
});
