const items = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    // More items...
  ]

const SpecialNotices = () => {
    return (
        <ul role="list" className="divide-y divide-gray-200">
          {items.map((item) => (
            <li key={item.id} className="px-4 py-4 sm:px-0">
              {/* Your content */}
            </li>
          ))}
        </ul>
    )
}

export default SpecialNotices;