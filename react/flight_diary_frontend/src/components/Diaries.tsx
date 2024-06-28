import { DiaryEntry } from "../types";

const Diaries = ({ diaries }: { diaries: DiaryEntry[] }) => {
    return (
        <div>
            <header>
                <b>Diary Entries</b>
            </header>
            <br />

            {diaries.map((diary: DiaryEntry) => {
                return (
                    <div key={diary.id}>
                        <header>
                            <b>{diary.date}</b>
                        </header>
                        <p>
                            visibility: {diary.visibility}
                            <br /> weather: {diary.weather}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default Diaries;