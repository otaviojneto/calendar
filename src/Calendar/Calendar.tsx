import { Function } from "./Data";
import * as S from "./styles";

export default function App() {
  const { currentMonth, currentYear, dateBr, getDaysInMonth, range } =
    Function();

  return (
    <S.Container>
      <h1>Canlendario</h1>

      <S.Content>
        <S.HeaderDate>
          <p> ← </p>

          <S.DateTitle>
            <p>{currentMonth}</p>
            <p>{dateBr}</p>
          </S.DateTitle>

          <p> ➝</p>
        </S.HeaderDate>

        <S.ContentMonth>
          <S.WeekDays>
            <S.TextWeekDays>dom</S.TextWeekDays>
            <S.TextWeekDays>seg</S.TextWeekDays>
            <S.TextWeekDays>ter</S.TextWeekDays>
            <S.TextWeekDays>qua</S.TextWeekDays>
            <S.TextWeekDays>qui</S.TextWeekDays>
            <S.TextWeekDays>sex</S.TextWeekDays>
            <S.TextWeekDays>sab</S.TextWeekDays>
          </S.WeekDays>
          {/* prev-date */}

          <S.ContentDays>
            <S.DaysDisable>26</S.DaysDisable>
            <S.DaysDisable>27</S.DaysDisable>
            <S.DaysDisable>28</S.DaysDisable>
            <S.DaysDisable>29</S.DaysDisable>
            <S.DaysDisable>30</S.DaysDisable>

            {range(getDaysInMonth(currentMonth.length, currentYear)).map(
              (day: number) => (
                <S.Days>{day}</S.Days>
              )
            )}

            {/* next-date */}
            <S.DaysDisable>1</S.DaysDisable>
            <S.DaysDisable>2</S.DaysDisable>
            <S.DaysDisable>3</S.DaysDisable>
            <S.DaysDisable>4</S.DaysDisable>
            <S.DaysDisable>5</S.DaysDisable>
            <S.DaysDisable>6</S.DaysDisable>
          </S.ContentDays>
        </S.ContentMonth>
      </S.Content>
    </S.Container>
  );
}
