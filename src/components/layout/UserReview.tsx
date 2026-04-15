
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
} from "@/components/ui/card";

export default function UserReview(){
    return (
      <>
        <Card size="sm" className="mx-auto w-full max-w-sm">
          <CardHeader>
            <CardTitle>Small Card</CardTitle>
            <CardDescription>
              This card uses the small size variant.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              The card component supports a size prop that can be set to
              &quot;sm&quot; for a more compact appearance.
            </p>
          </CardContent>
        </Card>
      </>
    );
}