from datetime import datetime, timezone

def show_timezones():
    now = datetime.now(timezone.utc)
    print(f"UTC: {now.strftime('%H:%M:%S')}")
    print(f"EST: {(now.hour - 5) % 24}:{now.strftime('%M:%S')}")
    print(f"PST: {(now.hour - 8) % 24}:{now.strftime('%M:%S')}")
    print(f"JST: {(now.hour + 9) % 24}:{now.strftime('%M:%S')}")

show_timezones()