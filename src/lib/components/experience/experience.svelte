<script>
    import moment from "moment";

    let totalExperience = "";
    const expData = [
        {
            position: "Backend Developer",
            location: `Icube by Sirclo, Yogyakarta`,
            startDate: "2022/06/25",
            endDate: null,
        },
        {
            position: "Fullstack Developer",
            location: `Mypro Komunika, Yogyakarta`,
            startDate: "2018/04/01",
            endDate: "2022/06/01",
        },
        {
            position: "Freelance Web Developer",
            location: `Yogyakarta`,
            startDate: "2016/10/01",
            endDate: "2018/04/01",
        },
        {
            position: "Project Lead",
            location: `CV. Interaktif Media Informatika, Yogyakarta`,
            startDate: "2016/03/01",
            endDate: "2016/10/01",
        },
    ];

    const calculateExperience = () => {
        let totalTime = 0;
        expData.forEach((value, index) => {
            let start = new Date(value.startDate);
            let end =
                value.endDate != null ? new Date(value.endDate) : new Date();
            totalTime += end.getTime() - start.getTime();
        });
        return (totalExperience = moment.duration(totalTime).humanize());
    };

    const formatTime = (dateStart, dateEnd) => {
        let start = moment(new Date(dateStart));
        let end = !dateEnd ? moment() : moment(new Date(dateEnd));
        return moment.duration(start.diff(end)).humanize();
    };

    totalExperience = calculateExperience();
</script>

<div class="tab-container">
    <h6>💼 EXPERIENCE</h6>
    <small><code>{totalExperience}</code></small>
    {#each expData as data}
        <div class="row">
            <div class="col-4">
                <span class="date"
                    >{!data.endDate
                        ? "Present"
                        : moment(new Date(data.endDate)).format("MMM, YYYY")}
                </span>

                <code class="total_work">{formatTime(data.startDate, data.endDate)}</code>

                <span class="date"
                    >{moment(new Date(data.startDate)).format(
                        "MMM, YYYY"
                    )}</span
                >
            </div>
            <div class="col-8">
                <div class="position">{data.position}</div>
                <span class="location">{data.location}</span>
            </div>
        </div>
    {/each}
</div>

<style>
    .row {
        border-top: 1px solid var(--secondary-focus);
    }
    .tab-container .row:last-of-type {
        border-bottom: 1px solid var(--secondary-focus);
    }
    .row .col-4 {
        padding: 0.5rem 1rem;
        border-right: 1px solid var(--secondary-focus);
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-evenly;
        flex-direction: column;
        align-content: center;
        align-items: flex-end;
    }
    .row .col-8 {
        display: flex;
        flex-wrap: nowrap;
        flex-direction: column;
        justify-content: center;
    }
    span.date {
        font-size: 0.75rem;
        line-height: 1rem;
    }
    code.total_work{
        padding:4px 6px;
        font-size: 0.7rem;
        margin:4px 0px;
    }

    .position{
        font-weight: 600;
    }
    .location{
        font-weight: 400;
        font-size:.9rem;
    }
</style>
