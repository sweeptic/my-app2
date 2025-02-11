interface IErrorItem {
  message: string;
}

const ErrorItem = ({ message }: IErrorItem) => {
  return <div className="error-item">{message}</div>;
};

export default ErrorItem;
