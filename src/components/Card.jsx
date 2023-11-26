function Card({ data }) {
  const dateStr = `${data.fetchTime.getFullYear()}/${data.fetchTime.getMonth()}/${data.fetchTime.getDate()} ${data.fetchTime.getHours()}:${data.fetchTime.getMinutes()}:${data.fetchTime.getSeconds()}`;
  return (
    <div className="card">
      <div className="card-content">
        <p>วัน-เวลาที่ดึงข้อมูลสำเร็จ: {dateStr}</p>
        <p>file-size: {data.fileSizeBytes}</p>
        <p>url: {data.url}</p>
      </div>
    </div>
  );
}

export default Card;
