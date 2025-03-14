import useExeCmd from './useExeCmd';

const useSubmitCmd = (
  input,
  setInput,
  inputHistory,
  setInputHistory,
  setCommandIndex,
  setActiveProject,
  setCmdHistory,
  CmdHistory
) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    const newInputHistory = [...inputHistory, input];
    setInputHistory(newInputHistory);
    setCommandIndex(-1);

    const result = useExeCmd(
      input,
      setActiveProject,
      setCmdHistory,
      CmdHistory
    );

    setInput('');
  };

  return handleSubmit;
};

export default useSubmitCmd;
