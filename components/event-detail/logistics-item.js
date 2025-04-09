function LogisticsItem(props) {
    const { icon: Icon } = props;
  
    return (
      <li className="flex items-center gap-4 text-gray-700">
        <span className="flex items-center justify-center w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full shadow">
          <Icon className="w-6 h-6" />
        </span>
        <span className="text-base">{props.children}</span>
      </li>
    );
  }
  
  export default LogisticsItem;
  