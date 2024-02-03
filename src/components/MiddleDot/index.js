const MiddleDot = () => {
  const dotStyle = {
    fontSize: '40px', // Adjust the size of the dot
    color: '#94a3b8', // Dot color
    fontWeight: '500',
    display: 'inline-block', // Align inline with text
    verticalAlign: 'middle', // Center vertically
  }

  return <span style={dotStyle}>&middot;</span>
}

export default MiddleDot
