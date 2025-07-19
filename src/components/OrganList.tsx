import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { coQuan } from "@/data/coQuan";

export const OrganList = () => {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
          CÁC CỔ QUAN HÀNH CHÍNH
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {coQuan.map((organ) => (
            <Card key={organ.id} className="hover:shadow-elevation transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg text-primary leading-tight">
                  {organ.tieuDe}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-start gap-2 text-sm">
                    <MapPin className="w-4 h-4 mt-0.5 text-muted-foreground flex-shrink-0" />
                    <span className="text-muted-foreground">{organ.diaChi}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span className="font-mono text-foreground">{organ.soDienThoai}</span>
                  </div>
                </div>
                <Link to={`/chi-tiet/${organ.id}`}>
                  <Button className="w-full group">
                    Xem chi tiết
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};