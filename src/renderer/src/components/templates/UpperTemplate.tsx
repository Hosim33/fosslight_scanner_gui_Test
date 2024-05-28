import { FC } from 'react';
import ModeController from '../organisms/ModeController';
import useMode from '@renderer/hooks/useMode';
import AnalyzeTemplate from './AnalyzeTemplate';
import CompareTemplate from './CompareTemplate';

const UpperTemplate: FC = () => {
  const { mode } = useMode();

  return (
    <div className="flex h-full flex-col gap-8 overflow-auto px-10 py-12">
      <div className="border-b border-b-PaleGray-200 py-6">
        <ModeController />
      </div>
      {mode === 'analyze' ? <AnalyzeTemplate /> : <CompareTemplate />}
    </div>
  );
};

export default UpperTemplate;